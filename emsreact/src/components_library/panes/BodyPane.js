import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI function that make classes available
import { withStyles } from "@material-ui/core/styles/index";

const styles = theme => ({
    bodyPane: {
        backgroundColor: theme.palette.grey[500],
        overflowY: "hidden"
    },
});


/**
 * Defines the background for the entire body.
 * Also gets rid of horizontal scrollbar by setting overflowY to hidden.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 */
class BodyPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.bodyPane}>

                {this.props.children}

            </div>

        )

    }

}

export default withStyles(styles)(BodyPane);
