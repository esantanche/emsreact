import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const styles = {
    AlignedGridPane: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
};


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
