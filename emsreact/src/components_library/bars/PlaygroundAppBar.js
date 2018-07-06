import React, { Component } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PropTypes from 'prop-types';



import AppBar from '@material-ui/core/AppBar';

import { withStyles } from "@material-ui/core/styles/index";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
});

class PlaygroundAppBar extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        //const { value } = this.state;

        return (

            <AppBar position="static"

                // className={classNames(classes.appBar, {
                //     [classes.appBarShift]: true,
                //     [classes[`appBarShift-left`]]: true,
                // })}
                // className={classes.AppBar}
            >
                {this.props.children}
                {/*<Toolbar disableGutters={!open}>*/}
                    {/*<IconButton*/}
                        {/*color="inherit"*/}
                        {/*aria-label="open drawer"*/}
                        {/*onClick={this.handleDrawerOpen}*/}
                        {/*className={classNames(classes.menuButton, open && classes.hide)}*/}
                    {/*>*/}
                        {/*<MenuIcon />*/}
                    {/*</IconButton>*/}
                    {/*<Typography variant="title" color="inherit" noWrap>*/}
                        {/*Persistent drawer*/}
                    {/*</Typography>*/}
                {/*</Toolbar>*/}
            </AppBar>

        )
    }

}

export default withStyles(styles)(PlaygroundAppBar);
//
// classes={{
//     paper: classes.drawerPaper,
// }}

