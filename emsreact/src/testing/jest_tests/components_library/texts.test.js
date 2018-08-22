// Here we test components in components_library/texts

import React from "react";
import renderer from 'react-test-renderer';

import HomeButtonText from "../../../components_library/texts/HomeButtonText";

describe('Testing HomeButtonText', function() {

    const home_button_text_to_be_tested = ( <HomeButtonText>
                                                Emanuele Santanché,<br /> Web Developer
                                            </HomeButtonText> );

    it('HomeButtonText renders correctly', () => {

        const tree = renderer
            .create(home_button_text_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
