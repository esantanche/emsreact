// Here we test components in the folder footer

import React from "react";
import renderer from "react-test-renderer";

import AppContext from "../../AppContext";
import FooterScreen from "../../footer/FooterScreen";
import PickMyBrainMessageService from "../../services/pick_my_brain_message/PickMyBrainMessageService";

describe('Testing FooterScreen', function() {

    const AppPickMyBrainMessageService = new PickMyBrainMessageService();

    const Services = { TopicService: null,
        ArticleService: null,
        PickMyBrainMessageService: AppPickMyBrainMessageService };

    const footer_screen_to_be_tested = ( <AppContext.Provider value={Services}>
                                            <FooterScreen />
                                        </AppContext.Provider> );

    it('FooterScreen renders correctly', () => {

        const tree = renderer
            .create(footer_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
