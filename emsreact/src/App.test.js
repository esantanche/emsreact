import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ArticleCard from './components_library/cards/ArticleCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// FIXME this goes to its file
it('ArticleCard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ArticleCard title="title 7yhtg5frs3444" image="http://backend.emanuelesantanche.com/sites/default/files/2018-07/css-in-js_0.png" text_content="text content 76d5ggsgsgsggs"
                                 article_node_id={22}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});