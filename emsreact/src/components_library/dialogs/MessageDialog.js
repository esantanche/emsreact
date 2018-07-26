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



// FIXME why screen? it's inside a card!!

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

        const { open, it_is_an_error_message, title, message, onclick, fullScreen } = this.props;

        return (

            <Dialog
                open={open}
                onClose={this.handleClose}
                fullScreen={fullScreen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                { it_is_an_error_message ?
                    (
                        <DialogTitle style={{ textAlign: "center" }}>
                            <ErrorOutline style={{ fontSize: "200%" }} />
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

export default withMobileDialog()(MessageDialog);



