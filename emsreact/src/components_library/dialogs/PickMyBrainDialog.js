import React, { Component } from 'react';

// Material UI components
import Button from "@material-ui/core/es/Button/Button";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import PropTypes from 'prop-types'

import ErrorOutline from '@material-ui/icons/ErrorOutline';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import PickMyBrainScreen from "../../pick_my_brain/PickMyBrainScreen";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";

import CloseIcon from '@material-ui/icons/Close';
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";
import ColouredCard from "../cards/ColouredCard";


// ./src/components_library/dialogs/PickMyBrainDialog.js
// Line 73:  'classes' is not defined    no-undef
// Line 76:  'CloseIcon' is not defined  react/jsx-no-undef
//
// Search for the keywords to learn more about each error.

// Is position relative actually needed?
const styles = {
    appBar: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
};

class PickMyBrainDialog extends Component {

    // FIXME needed?
    // static propTypes = {
    //     open: PropTypes.bool.isRequired,
    //     it_is_an_error_message: PropTypes.bool,
    //     title: PropTypes.string,
    //     message: PropTypes.string,
    //     onclick: PropTypes.func,
    //     fullScreen: PropTypes.bool.isRequired
    // };

    static propTypes = {
        open: PropTypes.bool.isRequired,
        onclick: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            // The element the menu is anchored to, typically a button that opens the menu
            // When anchorElement is null, the menu is invisible
            // FIXME ? ok?
            open: false
        };

    }

    // handleClose = () => {
    //     this.setState({ open: false });
    // };

    render() {

        // FIXME fix all these props

        const { open, it_is_an_error_message, title, message, onclick, fullScreen, classes } = this.props;

        // style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        // style={{ display: "flex", flexDirection: "row" }}

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


// export default withMobileDialog()(PickMyBrainDialog);



