// Here we test components in components_library/bars

import React from "react";
import renderer from 'react-test-renderer';

import MasterAppBar from "../../../components_library/bars/MasterAppBar";

it('MasterAppBar renders correctly', () => {

    const tree = renderer
        .create(<MasterAppBar />)
        .toJSON();
    expect(tree).toMatchSnapshot();

});