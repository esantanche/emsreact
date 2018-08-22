// Here we test components in components_library/cards

import ReactDOM from "react-dom";
import ArticleCard from "../../../components_library/cards/ArticleCard";
import React from "react";
import renderer from 'react-test-renderer';
import ColouredCard from "../../../components_library/cards/ColouredCard";
import SocialCard from "../../../components_library/cards/SocialCard";
import GitHub_logo from "../../../images/GitHub_Logo.png";

// Testing ArticleCard

const article_card_to_be_tested = ( <ArticleCard title="Article card title"
                                                 image="https://backend.emanuelesantanche.com/sites/default/files/2018-07/css-in-js_0.png"
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

// Testing ColouredCard

const coloured_card_to_be_tested = ( <ColouredCard /> );

const coloured_card_to_be_tested_light_version = ( <ColouredCard light={true}/> );

it('ColouredCard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(coloured_card_to_be_tested, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('ColouredCard renders correctly', () => {
    const tree = renderer
        .create(coloured_card_to_be_tested)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('ColouredCard renders correctly, light version', () => {
    const tree = renderer
        .create(coloured_card_to_be_tested_light_version)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

// Testing SocialCard

const social_card_to_be_tested = ( <SocialCard logo={GitHub_logo} url_to_go="https://github.com/esantanche"/> );

it('SocialCard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(social_card_to_be_tested, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('SocialCard renders correctly', () => {
    const tree = renderer
        .create(social_card_to_be_tested)
        .toJSON();
    expect(tree).toMatchSnapshot();
});