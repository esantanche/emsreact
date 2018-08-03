import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import AppBar from '@material-ui/core/AppBar';

// Material UI uses withStyles to inject an array of styles into the DOM as CSS, using JSS
import { withStyles } from "@material-ui/core/styles/index";

// This array of style gets injected into the component as "classes"
const styles = {
    MasterAppBar: {
        borderRadius: "4px",
    }
};

/**
 * The AppBar in the header. Its children are the home button and the menu button.
 *
 * @param {object} classes Classes injected by withStyles function
 */
class MasterAppBar extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

            <AppBar position="sticky" className={classes.MasterAppBar}>

                {this.props.children}

            </AppBar>

        )
    }

}

export default withStyles(styles)(MasterAppBar);

