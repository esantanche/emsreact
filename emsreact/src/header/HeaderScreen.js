import React, { Component } from 'react';
import PlaygroundDrawer from '../components_library/drawers/PlaygroundDrawer';
import PlaygroundAppBar from '../components_library/bars/PlaygroundAppBar';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

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

                        <PlaygroundAppBar style={{ justifyContent: "flex-end" }}>
                            <Grid container spacing={0}>
                                <Grid item xs={2}>
                                    logo
                                </Grid>
                                <Grid item xs={9}>

                                </Grid>
                                <Grid item xs={1}>
                                    <MenuIcon style={{ margin: 10, float: "right" }}/>
                                </Grid>
                            </Grid>

                            {/*<Button onClick={this.toggleDrawer(!this.state.open)}>Open</Button>*/}

                        </PlaygroundAppBar>

                        {/*<PlaygroundDrawer open={this.state.open}/>*/}

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