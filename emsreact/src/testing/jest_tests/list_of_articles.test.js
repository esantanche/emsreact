// Here we test components in the folder list_of_articles

import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ListOfArticlesScreen from "../../list_of_articles/ListOfArticlesScreen";
import TopicScreen from "../../list_of_articles/TopicScreen";

import ArticleService from "../../services/article/ArticleService";
import TopicService from "../../services/topic/TopicService";

// To provide this component with the application context
// See AppContext.js
import AppContext from "../../AppContext";

const AppArticleService = new ArticleService();
const AppTopicService = new TopicService();

const Services = { TopicService: AppTopicService,
                   ArticleService: AppArticleService,
                   PickMyBrainMessageService: null };

const list_of_articles_screen_to_be_tested = ( <AppContext.Provider value={Services}>
                                                    <ListOfArticlesScreen topic="How I work"
                                                                          sticky={true}
                                                    />
                                               </AppContext.Provider> );

const json_response_rest_api_call = [ {
        "nid": "8",
        "title": "How do I protect my investment in bespoke software?",
        "body": "body of How do I protect my investment in bespoke software?",
        "langcode": "English",
        "field_ems_topic": "How I work",
        "sticky": "On",
        "field_image": "\/sites\/default\/files\/2018-07\/How_do_I_protect_my_investment_in_bespoke_software.jpg"
    },
    {
        "nid": "7",
        "title": "How do I create my application?",
        "body": "body of How do I create my application?",
        "langcode": "English",
        "field_ems_topic": "How I work",
        "sticky": "On",
        "field_image": "\/sites\/default\/files\/2018-07\/How%20do%20I%20create%20my%20application%3F.jpg"
    },
    {
        "nid": "6",
        "title": "How do I make my application easy to manage in production?",
        "body": "body of How do I make my application easy to manage in production?",
        "langcode": "English",
        "field_ems_topic": "How I work",
        "sticky": "On",
        "field_image": "\/sites\/default\/files\/2018-07\/How_do_I_make_my_application_easy_to_manage_in_production.jpg"
    } ];


const json_response_rest_api_call_including_non_sticky = [ {
        "nid": "8",
        "title": "How do I protect my investment in bespoke software?",
        "body": "body of How do I protect my investment in bespoke software?",
        "langcode": "English",
        "field_ems_topic": "How I work",
        "sticky": "On",
        "field_image": "\/sites\/default\/files\/2018-07\/How_do_I_protect_my_investment_in_bespoke_software.jpg"
    },
    {
        "nid": "7",
        "title": "How do I create my application?",
        "body": "body of How do I create my application?",
        "langcode": "English",
        "field_ems_topic": "How I work",
        "sticky": "On",
        "field_image": "\/sites\/default\/files\/2018-07\/How%20do%20I%20create%20my%20application%3F.jpg"
    },
    {
        "nid": "6",
        "title": "How do I make my application easy to manage in production?",
        "body": "body of How do I make my application easy to manage in production?",
        "langcode": "English",
        "field_ems_topic": "How I work",
        "sticky": "On",
        "field_image": "\/sites\/default\/files\/2018-07\/How_do_I_make_my_application_easy_to_manage_in_production.jpg"
    },
    {
        "nid": "13",
        "title": "How do I make my application easy to troubleshoot?",
        "body": "body of How do I make my application easy to troubleshoot?",
        "langcode": "English",
        "field_ems_topic": "How I work",
        "sticky": "Off",
        "field_image": "\/sites\/default\/files\/2018-07\/5267178-xsmall.jpg"
    }
];

jest.mock('react-dotdotdot', () => 'div');

describe('Testing ListOfArticlesScreen', function() {

    it('ListOfArticlesScreen renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(list_of_articles_screen_to_be_tested , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('ListOfArticlesScreen mocking fetch call', () => {

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));

        const div = document.createElement('div');
        ReactDOM.render(list_of_articles_screen_to_be_tested , div);
        ReactDOM.unmountComponentAtNode(div);

        // There has to be one fetch call only
        expect(fetch.mock.calls.length).toEqual(1);

        // The first argument in the fetch call has to be a string
        // containing rest/EMS/view/articles
        // The first argument is the rest api url
        expect(fetch.mock.calls[0][0]).toMatch(/rest\/EMS\/view\/articles/);

    });

    // This test is supposed to return an empty snapshot because the
    // component ListOfArticlesScreen will be rendered before it updates with
    // the response of the fetch
    it('ListOfArticlesScreen renders nothing before receiving fetch response', () => {

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));

        const tree = renderer
            .create(list_of_articles_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});

const topic_screen_to_be_tested = ( <AppContext.Provider value={Services}>
                                        <TopicScreen topic="How I work"
                                                     sticky={true}
                                                     match={{ params: { topic: "how-i-work" }}}
                                        />
                                    </AppContext.Provider> );

describe('Testing TopicScreen', function() {

    it('TopicScreen renders without crashing', () => {

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call_including_non_sticky));

        const div = document.createElement('div');
        ReactDOM.render(topic_screen_to_be_tested , div);
        ReactDOM.unmountComponentAtNode(div);

    });

    it('TopicScreen mocking fetch call', () => {

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call_including_non_sticky));

        const div = document.createElement('div');
        ReactDOM.render(topic_screen_to_be_tested , div);
        ReactDOM.unmountComponentAtNode(div);

        // There has to be one fetch call only
        expect(fetch.mock.calls.length).toEqual(1);

        // The first argument in the fetch call has to be a string
        // containing rest/EMS/view/articles
        // The first argument is the rest api url
        expect(fetch.mock.calls[0][0]).toMatch(/rest\/EMS\/view\/articles/);

    });

    // This test is supposed to return an almost snapshot because the
    // component TopicScreen will be rendered before it updates with
    // the response of the fetch
    it('TopicScreen renders nothing before receiving fetch response', () => {

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call_including_non_sticky));

        const tree = renderer
            .create(topic_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
