import React, { Component } from 'react';


import PropTypes from 'prop-types';



import AppBar from '@material-ui/core/AppBar';

import { withStyles } from "@material-ui/core/styles/index";


const styles = {
    MasterAppBar: {
        borderRadius: "4px",
    }
};

class MasterAppBar extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        return (

            <AppBar position="sticky" className={classes.MasterAppBar}>

                {this.props.children}

            </AppBar>

        )
    }

}

export default withStyles(styles)(MasterAppBar);

