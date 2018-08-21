// FIXME docs? anything to do?
// Testing everything in folder article
// fixme fix docs


import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ListOfArticlesScreen from "../../list_of_articles/ListOfArticlesScreen";
import TopicScreen from "../../list_of_articles/TopicScreen";

import ArticleService from "../../services/article/ArticleService";
import TopicService from "../../services/topic/TopicService";

import AppContext from "../../AppContext";
import ArticleScreen from "../../article/ArticleScreen";
import PickMyBrainMessageService from "../../services/pick_my_brain_message/PickMyBrainMessageService";

const AppArticleService = new ArticleService();
// const AppTopicService = new TopicService();

const Services = { TopicService: null,
    ArticleService: AppArticleService,
    PickMyBrainMessageService: null };


// FIXME services

// FIXME clean up






// const article_screen_to_be_tested = ( <AppContext.Provider value={Services}>
//                                          <ArticleScreen match={{ params: { articlenid: 58 } }}
//                                          />
//                                       </AppContext.Provider> );

describe('Testing ArticleService', function() {

    // FIXME


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

    const AppArticleService = new ArticleService();


    // test('the data is peanut butter', done => {
    //     function callback(data) {
    //         expect(data).toBe('peanut butter');
    //         done();
    //     }
    //
    //     fetchData(callback);
    // });

    it('ArticleService test a fetch', done => {

        const mockCallBack = jest.fn();

        mockCallBack.mockImplementation(data => {
            //console.log('inside mockCallBack mockImplementation');
            //console.log(data);
            expect(data).toEqual(json_response_rest_api_call);
            done();
        });

        // function callback(data) {
        //             //expect(data).toBe('peanut butter');
        //             done();
        //         }

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));



        AppArticleService.fetch_articles({ nid: 45 }, mockCallBack);


        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toMatch(/rest\/EMS\/view\/articles/);
        //expect(mockCallBack.mock.calls.length).toEqual(1);



        // const div = document.createElement('div');
        // ReactDOM.render(article_screen_to_be_tested , div);
        // ReactDOM.unmountComponentAtNode(div);
    });

    // it('ArticleScreen mocking fetch call', () => {
    //
    //     fetch.resetMocks();
    //
    //     fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));
    //
    //     const div = document.createElement('div');
    //     ReactDOM.render(article_screen_to_be_tested, div);
    //     ReactDOM.unmountComponentAtNode(div);
    //
    //     // There has to be one fetch call only
    //     expect(fetch.mock.calls.length).toEqual(1);
    //
    //     // The first argument in the fetch call has to be a string
    //     // containing rest/EMS/view/articles
    //     // The first argument is the rest api url
    //     expect(fetch.mock.calls[0][0]).toMatch(/rest\/EMS\/view\/articles/);
    //
    // });
    //
    // // This test is supposed to return a snapshot with no article because the
    // // component ArticleScreen will be rendered before it updates with
    // // the response of the fetch
    // it('ArticleScreen renders no article before receiving fetch response', () => {
    //
    //     fetch.resetMocks();
    //
    //     fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));
    //
    //     const tree = renderer
    //         .create(article_screen_to_be_tested)
    //         .toJSON();
    //     expect(tree).toMatchSnapshot();
    //
    // });

});

describe('Testing PickMyBrainMessageService', function() {

    // FIXME


    const json_response_rest_api_call = {
        "nid": [
            {
                "value": 65
            }
        ],
        "uuid": [
            {
                "value": "69b62627-d106-4f7b-b00f-a228685b0f84"
            }
        ],
        "vid": [
            {
                "value": 149
            }
        ],
        "langcode": [
            {
                "value": "en"
            }
        ],
        "type": [
            {
                "target_id": "ems_pick_my_brain_message",
                "target_type": "node_type",
                "target_uuid": "5978e614-f462-4a08-9b7f-26a62d894df9"
            }
        ],
        "revision_timestamp": [
            {
                "value": "2018-08-21T18:54:45+00:00",
                "format": "Y-m-d\\TH:i:sP"
            }
        ],
        "revision_uid": [
            {
                "target_id": 0,
                "target_type": "user",
                "target_uuid": "712e6a0d-2e6b-4b8a-8208-c4ed749fe96d",
                "url": "\/user\/0"
            }
        ],
        "revision_log": [],
        "status": [
            {
                "value": true
            }
        ],
        "title": [
            {
                "value": "New message 2018-07-20 19:26"
            }
        ],
        "uid": [
            {
                "target_id": 0,
                "target_type": "user",
                "target_uuid": "712e6a0d-2e6b-4b8a-8208-c4ed749fe96d",
                "url": "\/user\/0"
            }
        ],
        "created": [
            {
                "value": "2018-08-21T18:54:45+00:00",
                "format": "Y-m-d\\TH:i:sP"
            }
        ],
        "changed": [
            {
                "value": "2018-08-21T18:54:45+00:00",
                "format": "Y-m-d\\TH:i:sP"
            }
        ],
        "promote": [
            {
                "value": false
            }
        ],
        "sticky": [
            {
                "value": false
            }
        ],
        "default_langcode": [
            {
                "value": true
            }
        ],
        "revision_translation_affected": [
            {
                "value": true
            }
        ],
        "content_translation_source": [
            {
                "value": "und"
            }
        ],
        "content_translation_outdated": [
            {
                "value": false
            }
        ],
        "field_email": [
            {
                "value": "esantanche@gmail.com"
            }
        ],
        "field_message": [
            {
                "value": "Messaggio per Emanuele Filipponi"
            }
        ],
        "field_name": [
            {
                "value": "Emanuele Filipponi"
            }
        ]
    };

    const AppPickMyBrainMessageService = new PickMyBrainMessageService();

    //const AppArticleService = new ArticleService();

    // test('the data is peanut butter', done => {
    //     function callback(data) {
    //         expect(data).toBe('peanut butter');
    //         done();
    //     }
    //
    //     fetchData(callback);
    // });

    it('PickMyBrainMessageService test creating a message', done => {

        // FIXME this is to be written

        const mockCallBack = jest.fn();

        mockCallBack.mockImplementation(data => {
            //console.log('inside mockCallBack mockImplementation');
            //console.log(data);
            // We expect null to be returned because, in case of no error,
            // that's what the api create_pick_my_brain_message is supposed to return
            expect(data).toEqual(null);
            done();
        });

        const message_details = {
            email: "esantanche@gmail.com",
            name: "Emanuele Santanche",
            message: "Just a test message"
        };

        // function callback(data) {
        //             //expect(data).toBe('peanut butter');
        //             done();
        //         }

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));


        AppPickMyBrainMessageService.create_pick_my_brain_message(message_details, mockCallBack);

        //AppArticleService.fetch_articles({ nid: 4555 }, mockCallBack);


        // expect(fetch.mock.calls.length).toEqual(1);
        // expect(fetch.mock.calls[0][0]).toMatch(/rest\/EMS\/view\/articles/);
        //expect(mockCallBack.mock.calls.length).toEqual(1);



        // const div = document.createElement('div');
        // ReactDOM.render(article_screen_to_be_tested , div);
        // ReactDOM.unmountComponentAtNode(div);
    });

});

describe('Testing TopicService', function() {

// FIXME

});



// FIXME now the other services!