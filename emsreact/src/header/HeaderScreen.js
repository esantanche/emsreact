import React, { Component } from 'react';

// Material UI components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// From components library
import MasterAppBar from "../components_library/bars/MasterAppBar";
import AlignedGridPane from "../components_library/panes/AlignedGridPane";
import HomeButtonPane from "../components_library/panes/HomeButtonPane";
import HomeButtonText from "../components_library/texts/HomeButtonText";
import HeaderMenu from "../components_library/menus/HeaderMenu";
import PickMyBrainDialog from "../components_library/dialogs/PickMyBrainDialog";
import MenuButton from "../components_library/buttons/MenuButton";
import FrontGridPane from "../components_library/panes/FrontGridPane";
import MenuButtonPane from "../components_library/panes/MenuButtonPane";

// Needed to use history and move to other url
import {withRouter} from "react-router-dom";

// Material UI function that make width available
import withWidth from "@material-ui/core/withWidth/withWidth";

/**
 * This is the header always present at the top of the page.
 *
 * There are the home button (the text "Emanuele Santanché, Web Developer") and the menu button.
 */
class HeaderScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // The element the menu is anchored to, typically a button that opens the menu
            // When anchorElement is null, the menu is invisible
            anchorElement: null,
            // The Pick My Brain dialog starts invisible. It will become
            // visible when the user will click on "Pick My Brain!" in the menu
            pick_my_brain_dialog_is_open: false
        };

    }

    /**
     * When the menu button, the button made of three lines, il clicked,
     * this function is called and we have to show the menu
     *
     * @param {object} event Click event for menu button
     */
    handleMenuButtonClick = event => {

        // By setting the anchor element for the menu to the menu button
        // the user has just clicked, we show the menu

        this.setState({ anchorElement: event.currentTarget });
    };

    /**
     * Called when an item of the menu is clicked.
     *
     * There may be a url to go to or we may have to show the Pick My Brain
     * dialog.
     *
     * @param {string} url_to_go_to The url we have to go to
     * @param {boolean} open_pick_my_brain_dialog True if the user clicked on
     * "Pick My Brain!" and we have to show the dialog PickMyBrainDialog
     */
    handleMenuClose = (url_to_go_to, open_pick_my_brain_dialog) => {

        this.setState({ anchorElement: null });

        if (url_to_go_to) {

            this.props.history.push(url_to_go_to);

        } else if (open_pick_my_brain_dialog) {

            this.setState({ pick_my_brain_dialog_is_open: true });

        }
    };

    /**
     * Called when the user clicks somewhere outside the menu.
     *
     * It means that we have to close the menu.
     */
    handleClickAwayFromMenu = () => {

        this.setState({ anchorElement: null });
    };

    /**
     * Called when the user clicks on the "X" to close the dialog.
     *
     * We close the dialog by setting pick_my_brain_dialog_is_open to false.
     */
    handleOnClickPickMyBrainDialog() {

        this.setState({ pick_my_brain_dialog_is_open: false });
    };

    render() {

        const { width } = this.props;

        return (

            <React.Fragment>

                <FrontGridPane>

                    <MasterAppBar>

                        <AlignedGridPane>
                            <Grid item xs={11}>
                                <HomeButtonPane>
                                    <Button href="/">

                                        {
                                            width === 'xs' ?
                                                <HomeButtonText>
                                                    Emanuele Santanché,<br /> Web Developer
                                                </HomeButtonText>
                                                :
                                                <HomeButtonText>
                                                    Emanuele Santanché, Web Developer
                                                </HomeButtonText>
                                        }

                                    </Button>
                                </HomeButtonPane>
                            </Grid>

                            <Grid item xs={1}>
                                <MenuButtonPane>
                                    <MenuButton onclick={this.handleMenuButtonClick.bind(this)} />
                                </MenuButtonPane>
                                <ClickAwayListener onClickAway={this.handleClickAwayFromMenu.bind(this)}>
                                    <HeaderMenu anchorElement={this.state.anchorElement}
                                                handleMenuClose={this.handleMenuClose.bind(this)}/>
                                </ClickAwayListener>
                            </Grid>
                        </AlignedGridPane>

                    </MasterAppBar>

                </FrontGridPane>

                <PickMyBrainDialog open={this.state.pick_my_brain_dialog_is_open}
                                   onclick={this.handleOnClickPickMyBrainDialog.bind(this)}/>

            </React.Fragment>

        )
    }

}

// withRouter is needed to be able to use the history
// like in:
//    this.props.history.push(url_to_go_to);
export default withRouter(withWidth()(HeaderScreen));

