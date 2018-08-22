// Here we test components in the folder home

import React from "react";
import renderer from "react-test-renderer";

// To provide this component with the application context
// See AppContext.js
import AppContext from "../../AppContext";

import HomeScreen from "../../home/HomeScreen";

import TopicService from "../../services/topic/TopicService";
import ArticleService from "../../services/article/ArticleService";

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
