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
import FooterScreen from "../../footer/FooterScreen";
import BodyPane from "../../components_library/panes/BodyPane";
import HomeButtonText from "../../components_library/texts/HomeButtonText";
import PickMyBrainMessageService from "../../services/pick_my_brain_message/PickMyBrainMessageService";

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

describe('Testing FooterScreen', function() {


    const AppPickMyBrainMessageService = new PickMyBrainMessageService();

    const Services = { TopicService: null,
        ArticleService: null,
        PickMyBrainMessageService: AppPickMyBrainMessageService };

    // const Services = { TopicService: AppTopicService,
    //     ArticleService: AppArticleService,
    //     PickMyBrainMessageService: null };

    const footer_screen_to_be_tested = ( <AppContext.Provider value={Services}>
                                            <FooterScreen />
                                        </AppContext.Provider> );

    // const footer_screen_to_be_tested = (  );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('FooterScreen renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(footer_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
