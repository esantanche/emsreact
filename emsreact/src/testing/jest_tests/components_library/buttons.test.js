// FIXME docs

// import ReactDOM from "react-dom";
import React from "react";
import renderer from 'react-test-renderer';
//import MasterAvatar from "../../../components_library/avatars/MasterAvatar";

import red from "@material-ui/core/colors/red";
import MasterAppBar from "../../../components_library/bars/MasterAppBar";
import MenuButton from "../../../components_library/buttons/MenuButton";

import { shallow } from 'enzyme';

// FIXME evertyhing

// FIXME Here we test components in components_library/avatars

it('MenuButton renders correctly', () => {
    const tree = renderer
        .create(<MenuButton />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('MenuButton, test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow(<MenuButton onClick={mockCallBack} />);
    button.find('MenuButton').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
});