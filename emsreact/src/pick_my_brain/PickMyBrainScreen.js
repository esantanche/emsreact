import React, { Component } from 'react';

// Material UI components
import TextField from "@material-ui/core/es/TextField/TextField";

import * as EmailValidator from 'email-validator';

import { injector } from 'react-services-injector';
import Button from "@material-ui/core/es/Button/Button";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";

import Email from '@material-ui/icons/Email';
import Person from "@material-ui/icons/es/Person";
import Message from "@material-ui/icons/es/Message";
import Grid from "@material-ui/core/es/Grid/Grid";
import PickMyBrainMessageService from "../services/pick_my_brain_message/PickMyBrainMessageService";
import MessageDialog from "../components_library/dialogs/MessageDialog";


// FIXME why screen? it's inside a card!!

class PickMyBrainScreen extends Component {

    constructor(props) {
        super(props);

        // Email starts as valid because we don't want the email field to show error
        // if it's empty

        this.state = { email: "",
                       email_is_valid: true,
                       name: "",
                       message: "",
                       submit_button_enabled: false,
                       message_dialog_is_open: true};

    }

    componentDidMount() {

        const { PickMyBrainMessageService } = this.services;

        this.PickMyBrainMessageService = PickMyBrainMessageService;

    }

    handleEmailChange(event) {

        let email = event.target.value;

        let email_is_valid = false;
        let email_error_text = "";

        // Let's get rid of extra spaces
        const trimmed_email = email.trim();

        // Email addresses cannot be valid if they are shorter than 5 characters
        if (trimmed_email.length > 5) {

            email_is_valid = EmailValidator.validate(trimmed_email);

            // We don't allow email addresses including the + sign.
            // For example, we consider as invalid the email address esantanche+001@gmail.com
            if (/\+/.test(trimmed_email))
                email_is_valid = false;

            if (!email_is_valid) email_error_text = "Please enter a valid email address";

        }

        var self = this;

        this.setState({ email: trimmed_email,
                email_error_text: email_error_text,
                email_is_valid: email_is_valid },
                function() {
                    //console.log('password: ' + password + ' password_is_valid: ' + this.state.password_is_valid);

                    // FIXME as soon as state actually changes, we can enable the submit button if the
                    // form is valid

                    // self.enable_create_an_account_button_if_form_is_valid();
                    self.enable_submit_button_if_form_is_valid();

                });

    };

    handleNameChange(event) {

        let name = event.target.value;

        var self = this;

        this.setState({ name: name }, function() {

            self.enable_submit_button_if_form_is_valid();

        });

    };

    handleMessageChange(event) {

        let message = event.target.value;

        // FIXME do I need any sensitization?

        var self = this;

        this.setState({ message: message }, function() {

            // FIXME as soon as state actually changes, we can enable the submit button if the
            // form is valid

            // self.enable_create_an_account_button_if_form_is_valid();
            self.enable_submit_button_if_form_is_valid();

        });

    };

    enable_submit_button_if_form_is_valid() {

        let form_is_valid = false;

        if (this.state.email_is_valid &&
            this.state.name.length > 0 &&
            this.state.message.length > 0)
            form_is_valid = true;

        this.setState({ submit_button_enabled: form_is_valid });

    }

    submit_message() {

        // alert("submit!");

        const message_details = {
           email: this.state.email,
           name: this.state.name,
           message: this.state.message
        };

        var self = this;

        this.PickMyBrainMessageService.create_pick_my_brain_message(message_details, function(error) {

            if (error) {

                console.error("PickMyBrainScreen::submit_message");
                console.error(error);


                self.setState({ message_dialog_is_open: true })

            } else {


                self.setState({ message_dialog_is_open: true })

            }


        });


    }

    handleOnClickDialog() {



        this.setState({ message_dialog_is_open: false });
    };



    render() {

        return (

            <React.Fragment>

                <Grid container spacing={32}>

                    <Grid item xs={12} sm={6}>

                        <TextField
                            required
                            error={!this.state.email_is_valid}
                            id="email"
                            label="Email"
                            fullWidth
                            // className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleEmailChange.bind(this)}
                            margin="dense"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <TextField
                            required
                            error={false}
                            id="name"
                            label="Name"
                            fullWidth
                            // className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleNameChange.bind(this)}
                            margin="dense"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person />
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </Grid>

                </Grid>

                <Grid container spacing={32}>

                    <Grid item xs={12}>

                        <TextField
                            required
                            error={false}
                            id="message"
                            label="Message"
                            // className={classes.textField}
                            value={this.state.message}
                            onChange={this.handleMessageChange.bind(this)}
                            margin="dense"
                            multiline
                            fullWidth
                            rowsMax="10"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Message />
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </Grid>

                </Grid>

                <Grid container spacing={32}>

                    <Grid item xs={12}>

                        <Button size="small"
                                disabled={!this.state.submit_button_enabled}
                                onClick={this.submit_message.bind(this)}>Submit</Button>

                    </Grid>

                </Grid>

                <MessageDialog open={this.state.message_dialog_is_open} onclick={this.handleOnClickDialog.bind(this)}/>

            </React.Fragment>

        )

    }

}

// FIXME no use for TopicService here

export default injector.connect(PickMyBrainScreen, {
    toRender: ['TopicService']
});
