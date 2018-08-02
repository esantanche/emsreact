import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI uses withStyles to inject an array of styles into the DOM as CSS, using JSS
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
    separatorPane: {
        height: "10px"
    },
};

/**
 * Just a separator.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 */
class SeparatorPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.separatorPane}>

                &nbsp;

            </div>

        )

    }

}

export default withStyles(styles)(SeparatorPane);
