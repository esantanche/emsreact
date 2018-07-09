// Just a test to refactor
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


// FIXME I want to know why it's called root

const styles = theme => ({
    bodyPane: {
        backgroundColor: "#FFFFFF"
    },
});

// FIXME this is the grid that is used to encapsulate two cards (or one on xsmall devices)

class InnerGridPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        leftComponent: PropTypes.element,
        rightComponent: PropTypes.element

    };

    render() {

        const { classes } = this.props;

        return (


            <Grid container spacing={8}>

                <Grid item xs={12} md={6} lg={6} >
                    {this.props.leftComponent}
                </Grid>

                <Grid item xs={12} md={6} lg={6} >
                    {this.props.rightComponent}
                </Grid>

            </Grid>

            // <Grid container spacing={16}>
            //
            //     <Hidden smDown>
            //         <Grid item md={1} lg={2} >
            //
            //         </Grid>
            //     </Hidden>
            //
            //     <Grid item xs={12} md={10} lg={8}>
            //
            //         {this.props.children}
            //
            //     </Grid>
            //
            //     <Hidden smDown>
            //         <Grid item md={1} lg={2} >
            //
            //         </Grid>
            //     </Hidden>
            //
            // </Grid>






        )

    }

}

export default withStyles(styles)(InnerGridPane);
