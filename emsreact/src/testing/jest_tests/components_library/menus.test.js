// Here we test components in components_library/menus

import React from "react";

import { shallow } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

import HeaderMenu from "../../../components_library/menus/HeaderMenu";

describe('Testing HeaderMenu', function() {

    const mockHandle = jest.fn();

    const div = document.createElement('div');

    const header_menu_to_be_tested = ( <HeaderMenu anchorElement={div}
                                                   handleMenuClose={mockHandle}/> );

    it('HeaderMenu renders correctly', () => {

        const tree = shallow(header_menu_to_be_tested);

        expect(EnzymeToJson(tree)).toMatchSnapshot();

    });

});
