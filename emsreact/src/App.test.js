import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Testing App.js', function() {

    it('renders without crashing', () => {

        const appDiv = document.createElement('div');

        ReactDOM.render(<App/>, appDiv);
        ReactDOM.unmountComponentAtNode(appDiv);
    });

});