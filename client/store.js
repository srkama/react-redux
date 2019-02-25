import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import comments from './data/comments';
import posts from './data/posts';

import rootReducers from './reducers/index';

const defaultState = {
    posts,
    comments
}

const enchancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducers, defaultState, enchancers)

export const syncedHistory = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;