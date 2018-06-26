
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {Route, Router, Switch} from 'react-router-dom'
import Child  from './components/book/child.js'
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory()

import configureStore from './store/configureStore';
import App from './components/App';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';

const store = configureStore();

render(
  <Provider store={store}>
    <Router  history={browserHistory} >
        <Switch>
            <Route path="/about" component={About}></Route>
            <Route path= "/books/:bookval" component = {Child} />
            <Route path="/books" component={Book}></Route>
            <Route path="/" component={App}></Route>
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
