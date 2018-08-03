import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Card from '@material-ui/core/Card';

// Theme, style, width and other Material UI related things
import { withStyles } from "@material-ui/core/styles/index";

// See MuiTheme.js for theme properties
const styles = theme => ({
    coloured_card: {
        backgroundColor: theme.palette.secondary.main
    },
    light_coloured_card: {
        backgroundColor: theme.palette.secondary.light
    }
});

/**
 * A card with coloured background.
 *
 * Props
 * @param {boolean} light True is a lighter colour is to be used
 */
class ColouredCard extends Component {

    static propTypes = {

        light: PropTypes.bool
    };

    render() {

        const { classes } = this.props;

        return (

            <Card className={this.props.light ? classes.light_coloured_card : classes.coloured_card}>

                {this.props.children}

            </Card>

        );
    }
}

export default withStyles(styles)(ColouredCard);