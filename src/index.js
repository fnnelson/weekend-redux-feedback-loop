import React from 'react';
import ReactDOM from 'react-dom/client';
// setting up Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';

// how do we want to update an object state?  
// We have 4 pages that will update an object like so:
// feedbackObject = {
//     feelingRating: 5, 
//     understandingRating: 5,
//     supportedRating:5,
//     comments: "I love this stuff!"
// }

// I'm trying to get all action types in one reducer to each add (or update a property of the object whenever that action type is dispatched

const feedbackData = (state = {}, action) => {
    if (action.type === 'SET_FEELING_RATING') {
        let feelingRating = action.payload;
        return { ...state, feelingRating };
    }
    if (action.type === 'SET_UNDERSTANDING_RATING') {
        let understandingRating = action.payload;
        return { ...state, understandingRating };
    }
    if (action.type === 'SET_SUPPORTED_RATING') {
        let supportedRating = action.payload;
        return { ...state, supportedRating };
    }
    if (action.type === 'SET_COMMENTS') {
        let comments = action.payload;
        return { ...state, comments };
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackData
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
