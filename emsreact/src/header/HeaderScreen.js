import React, { Component } from 'react';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MasterAppBar from "../components_library/bars/MasterAppBar";
import AlignedGridPane from "../components_library/panes/AlignedGridPane";
import HomeButtonPane from "../components_library/panes/HomeButtonPane";
import HomeButtonText from "../components_library/texts/HomeButtonText";
import HeaderMenu from "../components_library/menus/HeaderMenu";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {withRouter} from "react-router-dom";
import MessageDialog from "../components_library/dialogs/MessageDialog";
import PickMyBrainDialog from "../components_library/dialogs/PickMyBrainDialog";


class HeaderScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // The element the menu is anchored to, typically a button that opens the menu
            // When anchorElement is null, the menu is invisible
            // FIXME ? ok?
            anchorElement: null,
            pick_my_brain_dialog_is_open: false
        };

    }

    handleMenuButtonClick = event => {

        this.setState({ anchorElement: event.currentTarget });
    };

    handleMenuClose = (url_to_go_to, open_pick_my_brain_dialog) => {

        this.setState({ anchorElement: null });

        if (url_to_go_to) {

            this.props.history.push(url_to_go_to);

        } else if (open_pick_my_brain_dialog) {

            this.setState({ pick_my_brain_dialog_is_open: true });

        }
    };

    handleClickAwayFromMenu = () => {

        this.setState({ anchorElement: null });
    };

    handleOnClickPickMyBrainDialog() {

        // FIXME

        this.setState({ pick_my_brain_dialog_is_open: false });
    };

    render() {

        return (

            <React.Fragment>

                <Grid container spacing={16}>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                    <Grid item xs={12} md={10} lg={8} >

                        <MasterAppBar>

                            <AlignedGridPane>
                                <Grid item xs={11}>
                                    <HomeButtonPane>
                                        <Button href="/">
                                            <HomeButtonText>
                                                Emanuele Santanché, Web Developer
                                            </HomeButtonText>
                                        </Button>
                                    </HomeButtonPane>
                                </Grid>

                                <Grid item xs={1}>
                                    <Button onClick={this.handleMenuButtonClick.bind(this)}>
                                        <MenuIcon style={{ marginRight: "2em", float: "right" }}/>
                                    </Button>
                                    <ClickAwayListener onClickAway={this.handleClickAwayFromMenu.bind(this)}>
                                        <HeaderMenu anchorElement={this.state.anchorElement}
                                                    handleMenuClose={this.handleMenuClose.bind(this)}/>
                                    </ClickAwayListener>
                                </Grid>
                            </AlignedGridPane>

                        </MasterAppBar>

                    </Grid>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                </Grid>

                <PickMyBrainDialog open={this.state.pick_my_brain_dialog_is_open}
                                   onclick={this.handleOnClickPickMyBrainDialog.bind(this)}/>

            </React.Fragment>

        )
    }

}

// FIXME no styles here, move them to component library
// withWidth shouldn't be used as well

// export default HeaderScreen;

export default withRouter(HeaderScreen);

// export default HeaderScreen;


{/*<ClickAwayListener onClickAway={this.handleClickAway}>*/}
    {/*<div>*/}
        {/*<Button onClick={this.handleClick}>Open menu</Button>*/}
        {/*{open ? (*/}
            {/*<Paper className={classes.paper}>*/}
                {/*{fake}*/}
                {/*{fake}*/}
                {/*{fake}*/}
                {/*{fake}*/}
                {/*{fake}*/}
            {/*</Paper>*/}
        {/*) : null}*/}
    {/*</div>*/}
{/*</ClickAwayListener>*/}