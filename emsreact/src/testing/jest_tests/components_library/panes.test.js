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
import AlignedGridPane from "../../../components_library/panes/AlignedGridPane";
import BodyPane from "../../../components_library/panes/BodyPane";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";
import BottomGridPane from "../../../components_library/panes/BottomGridPane";
import FrontGridPane from "../../../components_library/panes/FrontGridPane";
import HomeButtonPane from "../../../components_library/panes/HomeButtonPane";
import InnerGridPane from "../../../components_library/panes/InnerGridPane";
import Card from "@material-ui/core/Card";
import SeparatorPane from "../../../components_library/panes/SeparatorPane";

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

describe('Testing AlignedGridPane', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
                {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const aligned_grid_pane_to_be_tested = ( <AlignedGridPane /> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('AlignedGridPane renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(aligned_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});

describe('Testing BodyPane', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
    {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const body_pane_to_be_tested = ( <BodyPane /> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('BodyPane renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(body_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});

describe('Testing BottomGridPane', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
    {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const bottom_grid_pane_to_be_tested = ( <BottomGridPane
        leftComponent={ (

            <React.Fragment>

                <Typography variant="title" >

                    Emanuele Santanché

                </Typography>

                <Typography variant="subheading" >

                    Paris, France and, remotely, worldwide

                </Typography>

            </React.Fragment>

        ) }
        rightComponent={ (

            <ButtonBase href="/article/58/privacy-policy">
                <Typography variant="title" >

                    Privacy policy

                </Typography>
            </ButtonBase>

        ) }
    /> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('BottomGridPane renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(bottom_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing FrontGridPane', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
    {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const front_grid_pane_to_be_tested = ( <FrontGridPane /> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('FrontGridPane renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(front_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing HomeButtonPane', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
    {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const home_button_pane_to_be_tested = ( <HomeButtonPane /> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('HomeButtonPane renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(home_button_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing InnerGridPane', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
    {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const inner_grid_pane_to_be_tested = ( <InnerGridPane key={1}

                                                          leftComponent={ (

                                                              <div>left component</div>

                                                          ) }

                                                          rightComponent={ (

                                                              <div>right component</div>

                                                          ) }

    /> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('InnerGridPane renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(inner_grid_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});


describe('Testing SeparatorPane', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
    {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const separator_pane_to_be_tested = ( <SeparatorPane /> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('SeparatorPane renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(separator_pane_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});