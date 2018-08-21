// FIXME docs? anything to do?
// Testing everything in folder article
// fixme fix docs

import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import HeaderScreen from "../../header/HeaderScreen";
import {BrowserRouter} from "react-router-dom";
import AppContext from "../../AppContext";
import HomeScreen from "../../home/HomeScreen";
import PickMyBrainMessageService from "../../services/pick_my_brain_message/PickMyBrainMessageService";
import FooterScreen from "../../footer/FooterScreen";
import TopicService from "../../services/topic/TopicService";
import ArticleService from "../../services/article/ArticleService";

// FIXME this is for the home

describe('Testing HomeScreen', function() {

    const AppTopicService = new TopicService();
    const AppArticleService = new ArticleService();

    const Services = { TopicService: AppTopicService,
                       ArticleService: AppArticleService,
                       PickMyBrainMessageService: null };

    const home_screen_to_be_tested = ( <AppContext.Provider value={Services}>
                                           <HomeScreen />
                                       </AppContext.Provider> );

    it('HomeScreen renders correctly', () => {

        const tree = renderer
            .create(home_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
