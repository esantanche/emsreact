// FIXME docs? anything to do?
// Testing everything in folder article
// fixme fix docs

import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import HeaderScreen from "../../header/HeaderScreen";
import {BrowserRouter} from "react-router-dom";
import AppContext from "../../AppContext";

//const AppArticleService = new ArticleService();
// const AppTopicService = new TopicService();

// const Services = { TopicService: null,
//     ArticleService: AppArticleService,
//     PickMyBrainMessageService: null };


// FIXME this is for the footer


//                            <FooterScreen />

// const json_response_rest_api_call = [
//     {
//         "nid": "58",
//         "title": "Privacy Policy",
//         "body": "This is the body of the privacy policy. It\' for testing",
//         "langcode": "English",
//         "field_ems_topic": "Small print",
//         "sticky": "Off",
//         "field_image": ""
//     }
// ];

// const article_screen_to_be_tested = ( <AppContext.Provider value={Services}>
//                                          <ArticleScreen match={{ params: { articlenid: 58 } }}
//                                          />
//                                       </AppContext.Provider> );

describe('Testing HeaderScreen', function() {


    // const AppPickMyBrainMessageService = new PickMyBrainMessageService();
    //
    // const Services = { TopicService: null,
    //     ArticleService: null,
    //     PickMyBrainMessageService: AppPickMyBrainMessageService };

    // const Services = { TopicService: AppTopicService,
    //     ArticleService: AppArticleService,
    //     PickMyBrainMessageService: null };

    // const header_screen_to_be_tested = ( <AppContext.Provider value={Services}>
    //                                         <HeaderScreen />
    //                                     </AppContext.Provider> );

    const header_screen_to_be_tested = ( <BrowserRouter>
                                            <HeaderScreen />
                                        </BrowserRouter> );

    // const footer_screen_to_be_tested = (  );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('HeaderScreen renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(header_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
