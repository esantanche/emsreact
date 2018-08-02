import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

/**
 * Header menu.
 *
 * Props
 * @param {object} anchorElement The element this menu should anchor to.
 * It gives this menu a position.
 * @param {function} handleMenuClose Function to call when the user clicks
 * on a menu item
 */
class HeaderMenu extends Component {

    static propTypes = {
        anchorElement: PropTypes.object,
        handleMenuClose: PropTypes.func
    };

    render() {

        const { anchorElement, handleMenuClose } = this.props;

        // To close this menu, just make anchorElement null

        // Pick My Brain menu item
        // It calls handleMenuClose with no url and true as second parameter
        // This means that the parent component will open the Pick My Brain Dialog
        // See HeaderScreen.js and PickMyBrainDialog.js

        return (

            <Menu
                id="header-menu"
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={handleMenuClose}>

                <MenuItem onClick={() => handleMenuClose("/")}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/how-i-work")}>How I work</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/the-tools-i-use")}>The tools I use</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/success-stories")}>Success stories</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/testimonials")}>Testimonials</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/talking-about-my-experiences")}>Articles</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/where-how")}>Where? How?</MenuItem>
                <MenuItem onClick={() => handleMenuClose("", true)}>
                    Pick My Brain!
                </MenuItem>

            </Menu>

        )

    }

}

export default HeaderMenu;


