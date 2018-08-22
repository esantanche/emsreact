// Here we test components in components_library/avatars

import React from "react";
import renderer from 'react-test-renderer';
import MasterAvatar from "../../../components_library/avatars/MasterAvatar";

import red from "@material-ui/core/colors/red";

it('MasterAvatar renders correctly', () => {

    const tree = renderer
        .create(<MasterAvatar color={red[500]}
                              letter="W"
                              label="How I work" />)
        .toJSON();
    expect(tree).toMatchSnapshot();

});