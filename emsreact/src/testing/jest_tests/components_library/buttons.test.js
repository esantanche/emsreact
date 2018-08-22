// Here we test components in components_library/buttons

import React from "react";
import renderer from 'react-test-renderer';

import MenuButton from "../../../components_library/buttons/MenuButton";

import { shallow } from 'enzyme';

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