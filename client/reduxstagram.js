import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Raven from 'raven-js';

import css from './styles/style.styl';

import store, { syncedHistory } from './store';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import { sentry_url } from './data/config';


Raven.config(sentry_url, {
    tags: {
        userLevel: 'editor',
    }
}).install();

//Raven.captureMessage("something mad happend");
//Raven.showReportDialog();


//console.log(window.doesNotExist.nope);


const route = (
    <Provider store={store}>
        <Router history={syncedHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="view/:postID" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(route, document.getElementById('root'));