import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Grid from '@material-ui/core/Grid';

// Material UI function that make classes available
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
    AlignedGridPane: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
};

/**
 * This is a pane. So it's used to position other components.
 * This one is a grid that aligns its children vertically.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 */
class AlignedGridPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {

        const { classes } = this.props;

        return (

            <Grid container spacing={0} className={classes.AlignedGridPane}>

                {this.props.children}

            </Grid>

        )

    }

}

export default withStyles(styles)(AlignedGridPane);
