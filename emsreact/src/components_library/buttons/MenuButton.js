import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Button from "@material-ui/core/Button";

// Material UI icons
import MenuIcon from "@material-ui/icons/Menu";

// Material UI functions that make classes available
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
    button: {
        float: "right"
    }
};

/**
 * This is the menu button, the one made of three horizontal lines
 *
 * Props
 * @param {function} onclick Function to call when the user clicks on the menu button
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