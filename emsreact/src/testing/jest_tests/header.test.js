// Here we test components in the folder header

import React from "react";
import renderer from "react-test-renderer";

import HeaderScreen from "../../header/HeaderScreen";
import { BrowserRouter } from "react-router-dom";

describe('Testing HeaderScreen', function() {

    const header_screen_to_be_tested = ( <BrowserRouter>
                                            <HeaderScreen />
                                         </BrowserRouter> );

    it('HeaderScreen renders correctly', () => {

        const tree = renderer
            .create(header_screen_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
