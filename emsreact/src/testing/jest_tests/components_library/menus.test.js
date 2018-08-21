// FIXME docs

// import ReactDOM from "react-dom";
import React from "react";
import renderer from 'react-test-renderer';
//import MasterAvatar from "../../../components_library/avatars/MasterAvatar";

import red from "@material-ui/core/colors/red";
import MasterAppBar from "../../../components_library/bars/MasterAppBar";
import MenuButton from "../../../components_library/buttons/MenuButton";

import { shallow } from 'enzyme';
import MessageDialog from "../../../components_library/dialogs/MessageDialog";
import ArticleCard from "../../../components_library/cards/ArticleCard";

import { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import PickMyBrainDialog from "../../../components_library/dialogs/PickMyBrainDialog";
import HeaderMenu from "../../../components_library/menus/HeaderMenu";
import ReactDOM from "react-dom";

// FIXME evertyhing

// FIXME Here we test components in components_library/avatars

{/*<MessageDialog open={this.state.error_dialog_is_open}*/}
               {/*it_is_an_error_message={true}*/}
               {/*title="Something went wrong"*/}
               {/*message="Please, save your message, reload the page and try again."*/}
               {/*onclick={this.handleOnClickErrorDialog.bind(this)}/>*/}

{/*<MessageDialog open={this.state.message_dialog_is_open}*/}
{/*it_is_an_error_message={false}*/}
{/*title="Message sent"*/}
{/*message="Thank you for your message!"*/}
{/*onclick={this.handleOnClickDialog.bind(this)}/>*/}

{/*<MessageDialog open={this.state.message_dialog_is_open}*/}
               {/*it_is_an_error_message={false}*/}
               {/*title="Message sent"*/}
               {/*message="Thank you for your message!"*/}
               {/*onclick={this.handleOnClickDialog.bind(this)}/>*/}


//MessageDialog

// FIXME

describe('Testing HeaderMenu', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
                {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    const mockHandle = jest.fn();

    const div = document.createElement('div');

    const header_menu_to_be_tested = ( <HeaderMenu anchorElement={div}
                                                   handleMenuClose={mockHandle}/> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('HeaderMenu renders correctly', () => {

        const tree = shallow(header_menu_to_be_tested);

        expect(EnzymeToJson(tree)).toMatchSnapshot();
        // const tree = renderer
        //     .create(header_menu_to_be_tested)
        //     .toJSON();
        // expect(tree).toMatchSnapshot();



        // const tree = renderer
        //     .create(message_dialog_error_message_to_be_tested)
        //     .toJSON();
        // expect(tree).toMatchSnapshot();
    });

//
// // FIXME
//     it('MessageDialog renders correctly, confirmation message', () => {
//
//         const tree = shallow(message_dialog_confirmation_message_to_be_tested);
//
//         expect(EnzymeToJson(tree)).toMatchSnapshot();
//
//         // const tree = renderer
//         //     .create(message_dialog_confirmation_message_to_be_tested)
//         //     .toJSON();
//         // expect(tree).toMatchSnapshot();
//     });
//
//     it('MessageDialog, test click event', () => {
//         const mockCallBack = jest.fn();
//
//         const dialog = mount(<MessageDialog open={true}
//                                             it_is_an_error_message={true}
//                                             title="Something went wrong"
//                                             message="Please, save your message, reload the page and try again."
//                                             onclick={mockCallBack}/>);
//
//         dialog.find('button').simulate('click');
//         expect(mockCallBack.mock.calls.length).toEqual(1);
//     });

});
//
// // FIXME
//
// describe('Testing PickMyBrainDialog', function() {
//
//     {/*<PickMyBrainDialog open={this.state.pick_my_brain_dialog_is_open}*/}
//     {/*onclick={this.handleOnClickPickMyBrainDialog.bind(this)}/>*/}
//
//     const pick_my_brain_dialog_to_be_tested = ( <PickMyBrainDialog open={true} /> );
//
//
//     it('PickMyBrainDialog renders correctly', () => {
//
//         const tree = shallow(pick_my_brain_dialog_to_be_tested);
//
//         expect(EnzymeToJson(tree)).toMatchSnapshot();
//
//     });
//
//     // input.simulate('change', { target: { value: 'Hello' } })
//
//     // FIXME want to test the click, but it cannot work if the fields are empty
//     // it('PickMyBrainDialog, test click event', () => {
//     //     const mockCallBack = jest.fn();
//     //
//     //     const dialog = shallow(pick_my_brain_dialog_to_be_tested);
//     //
//     //     dialog.find('input').simulate('change', { target: { value: 'esantanche@gmail.com' }});
//     //
//     //     expect(mockCallBack.mock.calls.length).toEqual(1);
//     // });
//
// });