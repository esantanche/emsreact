import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Grid from "@material-ui/core/es/Grid/Grid";

// Material UI icons
import Email from '@material-ui/icons/Email';
import Person from "@material-ui/icons/es/Person";
import Message from "@material-ui/icons/es/Message";

// To validate email addresses
import * as EmailValidator from 'email-validator';

// The injector allows this component to use services, see README.md in folder 'services'
import { injector } from 'react-services-injector';

// From components library
import MessageDialog from "../components_library/dialogs/MessageDialog";

/**
 * This is the Pick My Brain form used to send messages. Messages will be sent to the backend
 * to be stored. Their creation will be notified.
 *
 * @param {function} onclick There may be a function to call when the user clicks on "Submit"
 */
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
                       message_dialog_is_open: false,
                       error_dialog_is_open: false };

    }

    static propTypes = {
        onclick: PropTypes.func
    };

    componentDidMount() {

        const { PickMyBrainMessageService } = this.services;

        this.PickMyBrainMessageService = PickMyBrainMessageService;

    }

    /**
     * Called when the user enter text in the email field.
     *
     * @param {object} event Changing event for email field
     */
    handleEmailChange(event) {

        let email = event.target.value;

        let email_is_valid = false;

        // Let's get rid of extra spaces
        const trimmed_email = email.trim();

        // Email addresses cannot be valid if they are shorter than 5 characters
        if (trimmed_email.length > 5) {

            email_is_valid = EmailValidator.validate(trimmed_email);

            // We don't allow email addresses including the + sign.
            // For example, we consider as invalid the email address esantanche+001@gmail.com
            if (/\+/.test(trimmed_email))
                email_is_valid = false;
        }

        var self = this;

        this.setState({ email: trimmed_email,
                        email_is_valid: email_is_valid },
                function() {

                    self.enable_submit_button_if_form_is_valid();

                });

    };

    /**
     * Called when the user enter text in the name field.
     *
     * @param {object} event Changing event for name field
     */
    handleNameChange(event) {

        let name = event.target.value;

        var self = this;

        this.setState({ name: name }, function() {

            self.enable_submit_button_if_form_is_valid();

        });

    };

    /**
     * Called when the user enter text in the message field.
     *
     * @param {object} event Changing event for message field
     */
    handleMessageChange(event) {

        let message = event.target.value;

        var self = this;

        this.setState({ message: message }, function() {

            self.enable_submit_button_if_form_is_valid();

        });

    };

    /**
     * If the form is valid, this function enables the submit button.
     *
     * The form is valid if the email is valid and name and message fields
     * are not empty.
     */
    enable_submit_button_if_form_is_valid() {

        let form_is_valid = false;

        if (this.state.email_is_valid &&
            this.state.name.length > 0 &&
            this.state.message.length > 0)
            form_is_valid = true;

        this.setState({ submit_button_enabled: form_is_valid });

    }

    /**
     * This function send the message to the backend.
     *
     * It packages the fields, email, name and message, into an object and passes it
     * to the PickMyBrainMessageService service for it to send the message to the backend.
     *
     * This function will be called only if the form is valid because if it is not, the submit
     * button will be disabled.
     */
    submit_message() {

        const message_details = {
           email: this.state.email,
           name: this.state.name,
           message: this.state.message
        };

        var self = this;

        this.PickMyBrainMessageService.create_pick_my_brain_message(message_details, function(error) {

            if (error) {

                // For now exception handling is just writing the error to the console

                console.error("PickMyBrainScreen::submit_message");
                console.error(error);

                // In case of error, we open the error message dialog
                // We don't clear the form because the user may want to copy the
                // message and try again later

                self.setState({ error_dialog_is_open: true });

            } else {

                // If everything is fine, we clear the form and open the
                // message dialog to tell the user that we sent the message

                self.setState({ email: "",
                    email_is_valid: true,
                    name: "",
                    message: "",
                    submit_button_enabled: false,
                    error_dialog_is_open: false,
                    message_dialog_is_open: true
                });

            }

        });

    }

    /**
     * Closing the dialog when the user clicks on "OK".
     *
     * Closing the parent dialog as well, if there actually is a parent dialog.
     */
    handleOnClickDialog() {

        this.setState({ message_dialog_is_open: false, error_dialog_is_open: false });

        // Telling the parent component that we are done here
        // This only if the onclick function is defined, because
        // there may be no parent component

        if (this.props.onclick)
            this.props.onclick();
    };

    /**
     * Closing the error dialog.
     *
     * In this case we don't close the parent dialog, if any.
     *
     * This because the user may want to copy the message.
     */
    handleOnClickErrorDialog() {

        this.setState({ message_dialog_is_open: false, error_dialog_is_open: false });

       // No telling the parent component that it has to close
       // The user may want to copy the message they wrote and use it later
       // The user will close the dialog themselves when they finish copying the message

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

                <MessageDialog open={this.state.error_dialog_is_open}
                               it_is_an_error_message={true}
                               title="Something went wrong"
                               message="Please, save your message, reload the page and try again."
                               onclick={this.handleOnClickErrorDialog.bind(this)}/>

                <MessageDialog open={this.state.message_dialog_is_open}
                               it_is_an_error_message={false}
                               title="Message sent"
                               message="Thank you for your message!"
                               onclick={this.handleOnClickDialog.bind(this)}/>

            </React.Fragment>

        )

    }

}

export default injector.connect(PickMyBrainScreen);
