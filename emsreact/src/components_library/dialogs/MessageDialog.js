import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Material UI components
import Button from "@material-ui/core/es/Button/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Material UI icons
import ErrorOutline from '@material-ui/icons/ErrorOutline';

// On small devices, we want the dialog to go full screen
// This function does the trick
import withMobileDialog from '@material-ui/core/withMobileDialog';

// Material UI function that make classes available
import {withStyles} from "@material-ui/core/styles";

const styles = {
    dialog: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    dialog_title: {
        textAlign: "center"
    },
    error_outline: {
        fontSize: "200%"
    }
};

/**
 * Message dialog to notify successful completion of operations.
 * Used as well for errors. *
 *
 * Props
 * @param {boolean} open True is the dialog should be visible
 * @param {boolean} it_is_an_error_message True if the dialog contains an error message
 * @param {string} title Dialog title
 * @param {string} message Message to display
 * @param {function} onclick Function to call when the user click on OK
 * @param {boolean} fullScreen True if the dialog has to go full screen. This prop
 * is provided by the function withMobileDialog. It will make the dialog full screen
 * on small devices.
 */
class MessageDialog extends Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        it_is_an_error_message: PropTypes.bool,
        title: PropTypes.string,
        message: PropTypes.string,
        onclick: PropTypes.func,
        fullScreen: PropTypes.bool.isRequired
    };

    render() {

        const { open, it_is_an_error_message, title, message, onclick, fullScreen, classes } = this.props;

        // Only if it's an error message we display the ErrorOutline icon

        return (

            <Dialog
                open={open}
                onClose={this.handleClose}
                fullScreen={fullScreen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className={classes.dialog}>
                { it_is_an_error_message ?
                    (
                        <DialogTitle className={classes.dialog_title}>
                            <ErrorOutline className={classes.error_outline} />
                        </DialogTitle>
                    ) : ( <React.Fragment></React.Fragment> )
                }
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onclick} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

        )

    }

}

export default withMobileDialog()(withStyles(styles)(MessageDialog));
