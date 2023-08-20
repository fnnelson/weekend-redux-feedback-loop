import React from 'react';
import axios from 'axios';

import './App.css';
import { FeelingPage } from '../FeelingPage/FeelingPage';
import { UnderstandingPage } from '../UnderstandingPage/UnderstandingPage';
import { SupportedPage } from '../SupportedPage/SupportedPage';
import { CommentPage } from '../CommentPage/CommentPage';
import { SummaryPage } from '../SummaryPage/SummaryPage';
import { SuccessPage } from '../SuccessPage/SuccessPage';

import { HashRouter as Router, Route } from 'react-router-dom';

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route path='/' exact>
          <FeelingPage />
        </Route>

        <Route path='/understanding'>
          <UnderstandingPage />
        </Route>

        <Route path='/supported'>
          <SupportedPage />
        </Route>

        <Route path='/comment'>
          <CommentPage />
        </Route>

        <Route path='/summary'>
          <SummaryPage />
        </Route>

        <Route path='/success'>
          <SuccessPage />
        </Route>

      </Router>

    </div>
  );
}

export default App;

