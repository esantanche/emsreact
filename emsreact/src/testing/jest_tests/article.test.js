// Here we test components in the folder article

import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ArticleService from "../../services/article/ArticleService";
import AppContext from "../../AppContext";
import ArticleScreen from "../../article/ArticleScreen";

const AppArticleService = new ArticleService();

const Services = { TopicService: null,
    ArticleService: AppArticleService,
    PickMyBrainMessageService: null };

const json_response_rest_api_call = [
    {
        "nid": "58",
        "title": "Privacy Policy",
        "body": "This is the body of the privacy policy. It\' for testing",
        "langcode": "English",
        "field_ems_topic": "Small print",
        "sticky": "Off",
        "field_image": ""
    }
];

const article_screen_to_be_tested = ( <AppContext.Provider value={Services}>
                                         <ArticleScreen match={{ params: { articlenid: 58 } }}
                                         />
                                      </AppContext.Provider> );

describe('Testing ArticleScreen.js', function() {

    it('ArticleScreen renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(article_screen_to_be_tested , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('ArticleScreen mocking fetch call', () => {

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));

        const div = document.createElement('div');
        ReactDOM.render(article_screen_to_be_tested, div);
        ReactDOM.unmountComponentAtNode(div);

        // There has to be one fetch call only
        expect(fetch.mock.calls.length).toEqual(1);

        // The first argument in the fetch call has to be a string
        // containing rest/EMS/view/articles
        // The first argument is the rest api url
        expect(fetch.mock.calls[0][0]).toMatch(/rest\/EMS\/view\/articles/);

    });

    // This test is supposed to return a snapshot with no article because the
    // component ArticleScreen will be rendered before it updates with
    // the response of the fetch
    it('ArticleScreen renders no article before receiving fetch response', () => {

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));

        const tree = renderer
            .create(article_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
