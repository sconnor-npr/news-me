import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

import {search} from './search/search';
import requestSearchEpics from './search/epics/index';

const epics = [
    ...requestSearchEpics
];
const reducers = {search};
const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {}, applyMiddleware(epicMiddleware));

epicMiddleware.run(combineEpics(...epics));

export {store};