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

    const json_response_rest_api_call = {
        "results": [
            { "body": "<p>Privacy Policy</p>\n\n<p>Effective date: July 24, 2018</p>\n\n<p>Emanuele Santanche (\"us\", \"we\", or \"our\") operates the http://emanuelesantanche.com website and the Emanuele Santanche mobile application (the \"Service\").</p>\n\n<p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy for Emanuele Santanche is powered by <a href=\"https://privacypolicies.com/free-privacy-policy-generator/\">PrivacyPolicies.com</a>.</p>\n\n<p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>\n\n<h2>Information Collection And Use</h2>\n\n<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\n\n<h3>Types of Data Collected</h3>\n\n<h4>Personal Data</h4>\n\n<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited to:</p>\n\n<ul><li>Email address</li>\n\t<li>First name and last name</li>\n\t<li>Cookies and Usage Data</li>\n</ul><h4>Usage Data</h4>\n\n<p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device (\"Usage Data\").</p>\n\n<p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\n\n<p>When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>\n\n<h4>Tracking &amp; Cookies Data</h4>\n\n<p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\n\n<p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>\n\n<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>\n\n<p>Examples of Cookies we use:</p>\n\n<ul><li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n\t<li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\n\t<li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n</ul><h2>Use of Data</h2>\n\n<p>Emanuele Santanche uses the collected data for various purposes:</p>\n\n<ul><li>To provide and maintain the Service</li>\n\t<li>To notify you about changes to our Service</li>\n\t<li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n\t<li>To provide customer care and support</li>\n\t<li>To provide analysis or valuable information so that we can improve the Service</li>\n\t<li>To monitor the usage of the Service</li>\n\t<li>To detect, prevent and address technical issues</li>\n</ul><h2>Transfer Of Data</h2>\n\n<p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>\n\n<p>If you are located outside France and choose to provide information to us, please note that we transfer the data, including Personal Data, to France and process it there.</p>\n\n<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>\n\n<p>Emanuele Santanche will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>\n\n<h2>Disclosure Of Data</h2>\n\n<h3>Legal Requirements</h3>\n\n<p>Emanuele Santanche may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n\n<ul><li>To comply with a legal obligation</li>\n\t<li>To protect and defend the rights or property of Emanuele Santanche</li>\n\t<li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n\t<li>To protect the personal safety of users of the Service or the public</li>\n\t<li>To protect against legal liability</li>\n</ul><h2>Security Of Data</h2>\n\n<p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>\n\n<h2>Service Providers</h2>\n\n<p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>\n\n<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\n\n<h3>Analytics</h3>\n\n<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>\n\n<ul><li>\n\t<p><strong>Google Analytics</strong></p>\n\n\t<p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>\n\n\t<p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href=\"https://policies.google.com/privacy?hl=en\">https://policies.google.com/privacy?hl=en</a></p>\n\t</li>\n</ul><h2>Links To Other Sites</h2>\n\n<p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\n\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\n\n<h2>Children's Privacy</h2>\n\n<p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\n\n<p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>\n\n<h2>Changes To This Privacy Policy</h2>\n\n<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>\n\n<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"effective date\" at the top of this Privacy Policy.</p>\n\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\n\n<h2>Contact Us</h2>\n\n<p>If you have any questions about this Privacy Policy, please contact us:</p>\n\n<ul><li>By email: emanuele@emanuelesantanche.com</li>\n</ul>",
                "field_ems_topic": "Small print",
                "field_image": "",
                "langcode": "English",
                "nid": "58",
                "sticky": "Off",
                "title": "Privacy Policy" }
        ],
        "count": "1"

    };

    const response_for_article_views = {
            "articles": [
                    { "body": "<p>Privacy Policy</p>\n\n<p>Effective date: July 24, 2018</p>\n\n<p>Emanuele Santanche (\"us\", \"we\", or \"our\") operates the http://emanuelesantanche.com website and the Emanuele Santanche mobile application (the \"Service\").</p>\n\n<p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy for Emanuele Santanche is powered by <a href=\"https://privacypolicies.com/free-privacy-policy-generator/\">PrivacyPolicies.com</a>.</p>\n\n<p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>\n\n<h2>Information Collection And Use</h2>\n\n<p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>\n\n<h3>Types of Data Collected</h3>\n\n<h4>Personal Data</h4>\n\n<p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited to:</p>\n\n<ul><li>Email address</li>\n\t<li>First name and last name</li>\n\t<li>Cookies and Usage Data</li>\n</ul><h4>Usage Data</h4>\n\n<p>We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device (\"Usage Data\").</p>\n\n<p>This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\n\n<p>When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>\n\n<h4>Tracking &amp; Cookies Data</h4>\n\n<p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>\n\n<p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>\n\n<p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>\n\n<p>Examples of Cookies we use:</p>\n\n<ul><li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>\n\t<li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>\n\t<li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>\n</ul><h2>Use of Data</h2>\n\n<p>Emanuele Santanche uses the collected data for various purposes:</p>\n\n<ul><li>To provide and maintain the Service</li>\n\t<li>To notify you about changes to our Service</li>\n\t<li>To allow you to participate in interactive features of our Service when you choose to do so</li>\n\t<li>To provide customer care and support</li>\n\t<li>To provide analysis or valuable information so that we can improve the Service</li>\n\t<li>To monitor the usage of the Service</li>\n\t<li>To detect, prevent and address technical issues</li>\n</ul><h2>Transfer Of Data</h2>\n\n<p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>\n\n<p>If you are located outside France and choose to provide information to us, please note that we transfer the data, including Personal Data, to France and process it there.</p>\n\n<p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>\n\n<p>Emanuele Santanche will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>\n\n<h2>Disclosure Of Data</h2>\n\n<h3>Legal Requirements</h3>\n\n<p>Emanuele Santanche may disclose your Personal Data in the good faith belief that such action is necessary to:</p>\n\n<ul><li>To comply with a legal obligation</li>\n\t<li>To protect and defend the rights or property of Emanuele Santanche</li>\n\t<li>To prevent or investigate possible wrongdoing in connection with the Service</li>\n\t<li>To protect the personal safety of users of the Service or the public</li>\n\t<li>To protect against legal liability</li>\n</ul><h2>Security Of Data</h2>\n\n<p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>\n\n<h2>Service Providers</h2>\n\n<p>We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>\n\n<p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>\n\n<h3>Analytics</h3>\n\n<p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>\n\n<ul><li>\n\t<p><strong>Google Analytics</strong></p>\n\n\t<p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>\n\n\t<p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href=\"https://policies.google.com/privacy?hl=en\">https://policies.google.com/privacy?hl=en</a></p>\n\t</li>\n</ul><h2>Links To Other Sites</h2>\n\n<p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>\n\n<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\n\n<h2>Children's Privacy</h2>\n\n<p>Our Service does not address anyone under the age of 18 (\"Children\").</p>\n\n<p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>\n\n<h2>Changes To This Privacy Policy</h2>\n\n<p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>\n\n<p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"effective date\" at the top of this Privacy Policy.</p>\n\n<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\n\n<h2>Contact Us</h2>\n\n<p>If you have any questions about this Privacy Policy, please contact us:</p>\n\n<ul><li>By email: emanuele@emanuelesantanche.com</li>\n</ul>",
                      "field_ems_topic": "Small print",
                      "field_image": "",
                      "langcode": "English",
                      "nid": "58",
                      "sticky": "Off",
                      "title": "Privacy Policy" }
                ],
           "more": false
    };

    it('ArticleService test a fetch', done => {

        const AppArticleService = new ArticleService();

        const mockCallBack = jest.fn();

        mockCallBack.mockImplementation(data => {

            console.log("mockCallBack.mockImplementation");
            // console.log(data);
            // console.log(json_response_rest_api_call);

            expect(data).toEqual(response_for_article_views);
            done();
        });

        fetch.resetMocks();

        fetch.mockResponseOnce(JSON.stringify(json_response_rest_api_call));

        AppArticleService.get_articles({ nid: 58 }, mockCallBack);

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

