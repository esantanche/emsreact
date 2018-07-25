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

    // constructor(props) {
    //     super(props);
    //
    //     // Email starts as valid because we don't want the email field to show error
    //     // if it's empty
    //
    //     // this.state = { email: "",
    //     //     email_is_valid: true,
    //     //     name: "",
    //     //     message: "",
    //     //     submit_button_enabled: false };
    //
    //     // this.state = { open: this.props.open };
    //
    // }

    // FIXME mark this open prop as required?

    static propTypes = {
        open: PropTypes.bool,
        onclick: PropTypes.func
    };


    // componentDidMount() {
    //
    //     const { PickMyBrainMessageService } = this.services;
    //
    //     this.PickMyBrainMessageService = PickMyBrainMessageService;
    //
    // }



    render() {

        {/*<ErrorOutline style={{ fontSize: 48, transform: "translate(50%)", left: "50%" }} />*/}

        // style={{ fontSize: 48, transform: "translate(50%)", left: "50%" }}

        return (

            <Dialog
                open={this.props.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
                <ErrorOutline  />
                <DialogTitle id="alert-dialog-title">Something went wrong</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please, reload the page and try again.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onclick} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>


        )

    }

}

export default withMobileDialog()(MessageDialog);



