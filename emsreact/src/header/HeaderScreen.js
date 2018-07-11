import React, { Component } from 'react';
import PlaygroundDrawer from '../components_library/drawers/PlaygroundDrawer';
import PlaygroundAppBar from '../components_library/bars/PlaygroundAppBar';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import withWidth from "@material-ui/core/withWidth/index";
import {withStyles} from "@material-ui/core/styles/index";


class HeaderScreen extends Component {

    render() {

        // const { classes } = this.props;

        const { width } = this.props;


        return (

            <React.Fragment>

                <Grid container spacing={16}>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                    <Grid item xs={12} md={10} lg={8} >

                        <PlaygroundAppBar>
                            <Grid container spacing={0} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Grid item xs={11}>
                                    <Typography variant={ width === "xs" ? "body2" : "headline" }
                                                style={{ lineHeight: "3em", marginLeft: "2em", color: "white" }}
                                                >Emanuele Santanché, Web Developer</Typography>
                                </Grid>

                                <Grid item xs={1}>
                                    <MenuIcon style={{ marginRight: "24px", float: "right" }}/>
                                </Grid>
                            </Grid>

                        </PlaygroundAppBar>

                    </Grid>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                </Grid>

            </React.Fragment>

        )
    }

}

// FIXME no styles here, move them to component library
// withWidth shouldn't be used as well

export default withWidth()(HeaderScreen);


