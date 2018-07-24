import React, { Component } from 'react';

// Material UI components
import Card from '@material-ui/core/Card';

// Theme, style, width and other Material UI related things
import { withStyles } from "@material-ui/core/styles/index";

import PropTypes from 'prop-types';


const styles = theme => ({
    coloured_card: {
        backgroundColor: theme.palette.secondary.main
    },
    light_coloured_card: {
        backgroundColor: theme.palette.secondary.light
    }
});


// FIXME TODO  https://react-styleguidist.js.org/docs/documenting.html
class ColouredCard extends Component {

    // FIXME need these?
    static propTypes = {

        light: PropTypes.boolean
    };

    // There are some FontIcon elements that have style={{ width: "20px" }} added. It's because the icon
    // is defective and doesn't have proper width.
    render() {

        const { classes } = this.props;

        return (

            <Card  className={this.props.light ? classes.light_coloured_card : classes.coloured_card}>

                {this.props.children}

            </Card>


        );
    }
}

export default withStyles(styles)(ColouredCard);

