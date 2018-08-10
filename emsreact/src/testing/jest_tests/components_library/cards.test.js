// FIXME docs

import ReactDOM from "react-dom";
import ArticleCard from "../../../components_library/cards/ArticleCard";
import React from "react";
import renderer from 'react-test-renderer';

// Here we test components in components_library/cards

// Testing ArticleCard

const article_card_to_be_tested = ( <ArticleCard title="Article card title"
                                                 image="http://backend.emanuelesantanche.com/sites/default/files/2018-07/css-in-js_0.png"
                                                 text_content="Article card text content"
                                                 article_node_id={22}/> );

it('ArticleCard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(article_card_to_be_tested, div);
    ReactDOM.unmountComponentAtNode(div);
});

// Getting rid of react-dotdotdot library that causes an error
jest.mock('react-dotdotdot', () => 'div');

it('ArticleCard renders correctly', () => {
    const tree = renderer
        .create(article_card_to_be_tested)
        .toJSON();
    expect(tree).toMatchSnapshot();
});