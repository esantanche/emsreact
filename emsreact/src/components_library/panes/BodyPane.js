import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';

const styles = {
    bodyPane: {
        backgroundColor: "#FFFFFF",
        overflowY: "hidden"
    },
};

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
