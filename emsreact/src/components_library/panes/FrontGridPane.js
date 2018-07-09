// Just a test to refactor
import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';


// FIXME I want to know why it's called root

const styles = theme => ({
    bodyPane: {
        backgroundColor: "#FFFFFF"
    },
});

// FIXME this is the grid that is used to set margins on front pages.

class FrontGridPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,

    };

    render() {

        const { classes } = this.props;

        return (


            <Grid container spacing={16}>

                <Hidden smDown>
                    <Grid item md={1} lg={2} >

                    </Grid>
                </Hidden>

                <Grid item xs={12} md={10} lg={8}>

                    {this.props.children}

                </Grid>

                <Hidden smDown>
                    <Grid item md={1} lg={2} >

                    </Grid>
                </Hidden>

            </Grid>






        )

    }

}

export default withStyles(styles)(FrontGridPane);
