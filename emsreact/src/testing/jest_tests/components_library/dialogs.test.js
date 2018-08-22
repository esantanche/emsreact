// Here we test components in components_library/dialogs

import React from "react";

import { shallow, mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';

import MessageDialog from "../../../components_library/dialogs/MessageDialog";
import PickMyBrainDialog from "../../../components_library/dialogs/PickMyBrainDialog";

describe('Testing MessageDialog', function() {

    const message_dialog_error_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={true}
                                                                       title="Something went wrong"
                                                                       message="Please, save your message, reload the page and try again."/> );

    const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
                                                                              title="Message sent"
                                                                              message="Thank you for your message!"/> );

    it('MessageDialog renders correctly, error message', () => {

        const tree = shallow(message_dialog_error_message_to_be_tested);

        expect(EnzymeToJson(tree)).toMatchSnapshot();

    });

    it('MessageDialog renders correctly, confirmation message', () => {

        const tree = shallow(message_dialog_confirmation_message_to_be_tested);

        expect(EnzymeToJson(tree)).toMatchSnapshot();

    });

    it('MessageDialog, test click event', () => {
        const mockCallBack = jest.fn();

        const dialog = mount(<MessageDialog open={true}
                                            it_is_an_error_message={true}
                                            title="Something went wrong"
                                            message="Please, save your message, reload the page and try again."
                                            onclick={mockCallBack}/>);

        dialog.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

});

describe('Testing PickMyBrainDialog', function() {

    const pick_my_brain_dialog_to_be_tested = ( <PickMyBrainDialog open={true} /> );

    it('PickMyBrainDialog renders correctly', () => {

        const tree = shallow(pick_my_brain_dialog_to_be_tested);

        expect(EnzymeToJson(tree)).toMatchSnapshot();

    });

});