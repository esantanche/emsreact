import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Grid from '@material-ui/core/Grid';

// Material UI uses withStyles to inject an array of styles into the DOM as CSS, using JSS
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
    InnerGridPane: {
        marginLeft: "10px",
        marginRight: "10px"
    },
};

/**
 * This is the grid used for the main content. it shows two components side by side or
 * one only on small devices. You can see it at work on the home page.
 *
 * It shows two article cards or one on small devices.
 *
 * leftComponent and rightComponent actually go one above the other on small devices.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 * @param {object} leftComponent Component to show on the left side
 * @param {object} rightComponent Component to show on the right side
 */
class InnerGridPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        leftComponent: PropTypes.element,
        rightComponent: PropTypes.element
    };

    render() {

        const { classes } = this.props;

        return (

            <div className={classes.InnerGridPane}>

                <Grid container spacing={16}>

                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        {this.props.leftComponent}
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} >
                        {this.props.rightComponent}
                    </Grid>

                </Grid>

            </div>

        )

    }

}

export default withStyles(styles)(InnerGridPane);
