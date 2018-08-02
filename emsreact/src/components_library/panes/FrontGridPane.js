import React, { Component } from 'react';

// Material UI components
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

/**
 * This is the grid that sets two columns on the left and two on the right
 * as empty so that to make some margin on the sides of the main content.
 *
 * These two columns become one on medium devices and are removed on small
 * devices. The latter will see just the main content with no empty columns
 * on the sides.
 */
class FrontGridPane extends Component {

    render() {

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

export default FrontGridPane;
