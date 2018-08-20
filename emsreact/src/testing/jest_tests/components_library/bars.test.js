// FIXME docs

// import ReactDOM from "react-dom";
import React from "react";
import renderer from 'react-test-renderer';
//import MasterAvatar from "../../../components_library/avatars/MasterAvatar";

import red from "@material-ui/core/colors/red";
import MasterAppBar from "../../../components_library/bars/MasterAppBar";

// FIXME evertyhing

// Here we test components in components_library/avatars

it('MasterAvatar renders correctly', () => {
    const tree = renderer
        .create(<MasterAppBar />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});