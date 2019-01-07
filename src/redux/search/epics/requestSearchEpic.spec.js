import 'rxjs';
import * as operators from 'rxjs/operators';
import {Observable} from 'rxjs';
import {createEpicMiddleware} from 'redux-observable';
import configureMockStore from 'redux-mock-store';

import {requestSearchEpic} from './requestSearchEpic';
import {updateSearchText, receiveSearchResults} from '../search';
import * as services from '../../services';

describe('Given the requestSearchEpic', () => {
    let store;

    beforeEach(() => {
        spyOn(operators, 'debounceTime').and.callFake(function() {
            return this;
        });

        const middleware = createEpicMiddleware();
        const mockStore = configureMockStore([middleware]);
        store = mockStore({
            search: {
                searchText: 'test-text',
                articles: []
            }
        });
        middleware.run(requestSearchEpic);
    });

    xdescribe('When the updateSearchText action is dispatched', () => {
        let resolveRequest, rejectRequest;

        beforeEach(() => {
            spyOn(services, 'fetchArticles').and.returnValue(new Promise(resolve => {
                resolveRequest = resolve;
            }));
            store.dispatch(updateSearchText('test-text'));
        });

        it('Then calls the service to fetch news articles', () => {
            expect(services.fetchArticles).toHaveBeenCalledWith('test-text');
        });

        describe('When the request is successful', () => {
            beforeEach(() => {
                resolveRequest(['article-1', 'article-2']);
            });

            it('Then dispatches the action to receive the results', () => {
                expect(store.getActions()).toEqual([
                    updateSearchText('test-text'),
                    receiveSearchResults(['article-1', 'article-2'])
                ]);
            });
        });
    });
});