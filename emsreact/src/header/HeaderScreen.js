import React, { Component } from 'react';
import PlaygroundDrawer from '../components_library/drawers/PlaygroundDrawer';
import PlaygroundAppBar from '../components_library/bars/PlaygroundAppBar';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


class HeaderScreen extends Component {

    state = {
        open: false
    };

    toggleDrawer = (open) => () => {
        this.setState({
            open: open,
        });
    };

    render() {

        //const { value } = this.state;

        const { classes } = this.props;

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
                                    <Typography variant="headline"
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

export default HeaderScreen;