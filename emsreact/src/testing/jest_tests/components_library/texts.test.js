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
import HomeButtonText from "../../../components_library/texts/HomeButtonText";

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

describe('Testing HomeButtonText', function() {

    // FIXME

    {/*<HeaderMenu anchorElement={this.state.anchorElement}*/}
                {/*handleMenuClose={this.handleMenuClose.bind(this)}/>*/}

    // const mockHandle = jest.fn();
    //
    // const div = document.createElement('div');

    const home_button_text_to_be_tested = ( <HomeButtonText>
                                                Emanuele Santanché,<br /> Web Developer
                                            </HomeButtonText> );

    // const message_dialog_confirmation_message_to_be_tested = ( <MessageDialog open={true} it_is_an_error_message={false}
    //                                                                           title="Message sent"
    //                                                                           message="Thank you for your message!"/> );

    it('HomeButtonText renders correctly', () => {

        // const tree = shallow(header_menu_to_be_tested);
        //
        // expect(EnzymeToJson(tree)).toMatchSnapshot();
        const tree = renderer
            .create(home_button_text_to_be_tested)
            .toJSON();
        expect(tree).toMatchSnapshot();

    });

});
