// Just a test to refactor
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';


// FIXME I want to know why it's called root

const styles = theme => ({
    separatorPane: {
        height: "10px"
    },
});

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
