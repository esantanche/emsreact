import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleCard from './components_library/cards/ArticleCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
