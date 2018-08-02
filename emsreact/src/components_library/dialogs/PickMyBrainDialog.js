import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Material UI components
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Dialog from '@material-ui/core/Dialog';
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";

// Material UI icons
import CloseIcon from '@material-ui/icons/Close';

// On small devices, we want the dialog to go full screen
// This function does the trick
import withMobileDialog from '@material-ui/core/withMobileDialog';

// From component library
import PickMyBrainScreen from "../../pick_my_brain/PickMyBrainScreen";
import ColouredCard from "../cards/ColouredCard";

// Material UI function that make classes available
import {withStyles} from "@material-ui/core/styles";

const styles = {
    appBar: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
};

/**
 * When clicking on "Pick My Brain!" in the menu, we use the same form you find in the footer
 * to allow the user to write a message.
 *
 * Props
 * @param {boolean} open True is the dialog should be visible
 * @param {function} onclick Function to call when the user click on OK
 * @param {boolean} fullScreen True if the dialog has to go full screen. This prop
 * is provided by the function withMobileDialog. It will make the dialog full screen
 * on small devices.
 * @param {object} classes Classes injected by withStyles function
 */
class PickMyBrainDialog extends Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onclick: PropTypes.func,
        fullScreen: PropTypes.bool.isRequired,
        classes: PropTypes.object.isRequired
    };

    render() {

        const { open, onclick, fullScreen, classes } = this.props;

        return (

            <Dialog
                open={open}
                onClose={this.handleClose}
                fullScreen={fullScreen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" onClick={onclick} aria-label="Close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <ColouredCard light={true}>

                    <CardHeader title="Pick My Brain!"
                                subheader="Or just ask me a question" />

                    <CardContent>

                        <PickMyBrainScreen onclick={onclick} />

                    </CardContent>

                </ColouredCard>

            </Dialog>

        )

    }

}

export default withMobileDialog()(withStyles(styles)(PickMyBrainDialog));
