import {
    UPDATE_SEARCH_TEXT,
    RECEIVE_SEARCH_RESULTS
} from '../actions';

const INIT_STATE = Object.freeze({
    searchText: '',
    articles: []
});

export const updateSearchText = searchText => ({type: UPDATE_SEARCH_TEXT, searchText});
export const receiveSearchResults = results => ({type: RECEIVE_SEARCH_RESULTS, results});

export const search = (state = INIT_STATE, action) => {
    switch(action.type) {
        case UPDATE_SEARCH_TEXT: {
            const {searchText} = action;
            const {articles} = state;

            return {
                ...state,
                searchText,
                articles: searchText.trim() === "" ? [] : articles
            };
        }
        case RECEIVE_SEARCH_RESULTS: {
            const {results: {articles}} = action;
            
            return {
                ...state,
                articles
            };
        }
        default:
            return state;
    }
}