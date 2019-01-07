import {search, updateSearchText, receiveSearchResults} from './search';

describe('Given the search reducer', () => {
    let initialState, currentState, expectedState;

    beforeEach(() => {
        initialState = {
            searchText: '',
            articles: []
        };

        currentState = undefined;
        expectedState = search(currentState, {type: 'test-action'});
    });

    it('Then returns the initial state', () => {
        expect(expectedState).toEqual(initialState);
    });

    describe('When the updateSearchText action is reduced', () => {
        beforeEach(() => {
            currentState = expectedState;
            expectedState = search(currentState, updateSearchText('new-text'));
        });

        it('Then should update the state', () => {
            expect(expectedState).toEqual({
                ...currentState,
                searchText: 'new-text'
            });
        });
    });

    describe('When the receiveSearchResults action is reduced', () => {
        beforeEach(() => {
            currentState = expectedState;
            expectedState = search(currentState, receiveSearchResults({articles: ['results']}));
        });

        it('Then should update the state', () => {
            expect(expectedState).toEqual({
                ...currentState,
                articles: ['results']
            });
        });
    });
});

