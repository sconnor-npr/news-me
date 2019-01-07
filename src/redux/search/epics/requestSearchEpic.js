import {ofType} from 'redux-observable';
import {flatMap, tap, debounceTime} from 'rxjs/operators';

import {UPDATE_SEARCH_TEXT} from '../../actions';
import {receiveSearchResults} from '../search';
import {typeDebounce} from '../../../config/app.conf';
import {fetchArticles} from '../../services';

const fetchResults = searchText => {
    return searchText ? fetchArticles(searchText) : Promise.resolve(null);
};

const requestSearchEpic = action$ => {
    let lastSearchText = null;
    return action$.pipe(
        ofType(UPDATE_SEARCH_TEXT),
        debounceTime(typeDebounce),
        tap(({searchText}) => {
            lastSearchText = searchText;
        }),
        flatMap(({searchText}) => {
            return fetchResults(searchText)
                .then((response) => {
                    return searchText === lastSearchText 
                        ? [receiveSearchResults(response)]
                        : [];
                })
                .catch(error => new Error(error));
        }),
        flatMap(actions => actions)
    );
};

export {requestSearchEpic};