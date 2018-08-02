import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Button from "@material-ui/core/Button";

// Material UI icons
import MenuIcon from "@material-ui/icons/Menu";

// Theme, style, width and other Material UI related things
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
    button: {
        float: "right"
    }
};

// FIXME everything to fix here!!!

// FIXME clean up to do!!!

/**
 * fixme
 *
 * Props
 * @param {function} onclick fixme
 */
class MenuButton extends Component {

    static propTypes = {
        onclick: PropTypes.func
    };

    render() {

        const { onclick, classes } = this.props;

        return (

            <Button onClick={onclick}
                    className={classes.button}>
                <MenuIcon />
            </Button>

        );
    }
}

export default withStyles(styles)(MenuButton);