import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// https://github.com/joernroeder/piwik-react-router/issues/48

// FIXME fix this test

import ReactGA from 'react-ga';


it('renders without crashing', () => {

  // FIXME



  const body = document.createElement('body');
  const rootDiv = document.createElement('div');
  body.appendChild(rootDiv);

    ReactGA.initialize('UA-71688245-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

  ReactDOM.render(<App />, rootDiv);
  ReactDOM.unmountComponentAtNode(div);
});
