import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import {compose, createStore} from "redux";
import {rootReducer} from "./components/store/rootReducer";
import {Provider} from "react-redux";

const history = createBrowserHistory()
const store = createStore(rootReducer)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
reportWebVitals();
