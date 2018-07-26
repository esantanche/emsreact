

import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Link from "react-router-dom/es/Link";

const styles = {
    HomeButtonPane: {
        marginLeft: "1em"
    },
};

class HeaderMenu extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     // this.state = {
    //     //     // The element the menu is anchored to, typically a button that opens the menu
    //     //     // When anchorElement is null, the menu is invisible
    //     //     // FIXME ? ok?
    //     //     anchorElement: null,
    //     //     handleClose:
    //     // };
    //
    // }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        anchorElement: PropTypes.object,
        handleMenuClose: PropTypes.func
    };

    // handleClose = () => {
    //     this.setState({ anchorElement: null });
    // };

    render() {

        const { anchorElement, handleMenuClose } = this.props;

        return (

            <Menu
                id="header-menu"
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={handleMenuClose}>

                <MenuItem onClick={() => handleMenuClose("/articles/how-i-work")}>How I work</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/the-tools-i-use")}>The tools I use</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/success-stories")}>Success stories</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/testimonials")}>Testimonials</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/articles/talking-about-my-experiences")}>Articles</MenuItem>
                <MenuItem onClick={() => handleMenuClose("/#footer_anchor")}>Pick My Brain!</MenuItem>

            </Menu>

        )

    }

}

export default withStyles(styles)(HeaderMenu);


