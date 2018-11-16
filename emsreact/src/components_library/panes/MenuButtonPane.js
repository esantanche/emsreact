import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI functions that make classes and width available
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
    MenuButtonPane: {
        marginRight: "1em"
    }
};

/**
 * This pane defines margins for the menu button, the one in the header on the right.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 * @param {string} width Material UI device width (xs, sm, md, lg, xl). The function withWidth
 * provides it.
 */
class MenuButtonPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {

        const { classes } = this.props;

        // For width other than 'xs', let's add top and bottom margins.
        // For 'xs' width there will be no margins

        return (

            <div className={ classes.MenuButtonPane }>

                { this.props.children }

            </div>

        )

    }

}

export default withStyles(styles)(MenuButtonPane);
