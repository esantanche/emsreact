// Here we test services, see folder services

import React from "react";

import ArticleService from "../../services/article/ArticleService";
import TopicService from "../../services/topic/TopicService";
import PickMyBrainMessageService from "../../services/pick_my_brain_message/PickMyBrainMessageService";

import red from "@material-ui/core/colors/red";
import lightBlue from "@material-ui/core/colors/lightBlue";
import orange from "@material-ui/core/colors/orange";
import lightGreen from "@material-ui/core/colors/lightGreen";
import yellow from "@material-ui/core/colors/yellow";
import indigo from "@material-ui/core/colors/indigo";

describe('Testing ArticleService', function() {

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

    it('ArticleService test a fetch', done => {

        const mockCallBack = jest.fn();

        mockCallBack.mockImplementation(data => {

            expect(data).toEqual(json_response_rest_api_call);
            done();
        });

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));

        AppArticleService.get_articles({ nid: 45 }, mockCallBack);

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toMatch(/rest\/EMS\/view\/articles/);

    });

});

describe('Testing PickMyBrainMessageService', function() {

    // This is the response the mock rest api call will return
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

    it('PickMyBrainMessageService test creating a message', done => {

        const mockCallBack = jest.fn();

        mockCallBack.mockImplementation(data => {

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

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));

        AppPickMyBrainMessageService.create_pick_my_brain_message(message_details, mockCallBack);

    });

});

describe('Testing TopicService', function() {

    const result_when_getting_all_topics = [

        {
            name: "How I work",
            name_for_url: "how-i-work",
            subheader: "There is value in doing things properly first time",
            letter_for_avatar: "W",
            color_for_avatar: red[500],
            more_articles_button_label: "More about how I work"
        },
        {
            name: "The tools I use",
            name_for_url: "the-tools-i-use",
            subheader: "Modern technology making writing code more productive, fun and easy",
            letter_for_avatar: "T",
            color_for_avatar: lightBlue[400],
            more_articles_button_label: "More about the tools I use"
        },
        {
            name: "Success stories",
            name_for_url: "success-stories",
            subheader: "From Intel Corporation to video streaming of classical music",
            letter_for_avatar: "S",
            color_for_avatar: orange[400],
            more_articles_button_label: "More success stories"
        },
        {
            name: "Testimonials",
            name_for_url: "testimonials",
            subheader: "Happy clients and happy managers",
            letter_for_avatar: "T",
            color_for_avatar: lightGreen[500],
            more_articles_button_label: "More testimonials"
        },
        {
            name: "Talking about my experiences",
            name_for_url: "talking-about-my-experiences",
            subheader: "Sharing my knowledge with the world",
            letter_for_avatar: "E",
            color_for_avatar: yellow[600],
            more_articles_button_label: "More knowledge"
        },
        {
            name: "Where? How?",
            name_for_url: "where-how",
            subheader: "Where do I work? How do I work with you?",
            letter_for_avatar: "W",
            color_for_avatar: indigo[300],
            more_articles_button_label: "More about where and how I work with you"
        }
    ];

    const AppTopicService = new TopicService();

    it('TopicService getting all topics', done => {

        const mockCallBack = jest.fn();

        mockCallBack.mockImplementation(data => {

            // We expect null to be returned because, in case of no error,
            // that's what the api create_pick_my_brain_message is supposed to return
            expect(data).toEqual(result_when_getting_all_topics);
            done();
        });

        AppTopicService.get_topics(mockCallBack);

    });

    it('TopicService getting one topic only', done => {

        const mockCallBack = jest.fn();

        mockCallBack.mockImplementation(data => {

            // We expect null to be returned because, in case of no error,
            // that's what the api create_pick_my_brain_message is supposed to return
            expect(data).toEqual(result_when_getting_all_topics.find(topic => topic.name_for_url === "talking-about-my-experiences"));
            done();
        });

        AppTopicService.get_topic_from_url("talking-about-my-experiences", mockCallBack);

    });
});

