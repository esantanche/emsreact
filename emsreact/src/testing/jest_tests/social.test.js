// Here we test components in the folder social

import React from "react";
import renderer from "react-test-renderer";

import SocialScreen from "../../social/SocialScreen";

describe('Testing SocialScreen', function() {

    const social_screen_to_be_tested = ( <SocialScreen /> );

    it('SocialScreen renders correctly', () => {

        const tree = renderer
            .create(social_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
