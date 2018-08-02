import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Grid from '@material-ui/core/Grid';

// Material UI uses withStyles to inject an array of styles into the DOM as CSS, using JSS
import { withStyles } from "@material-ui/core/styles/index";

const styles = {
    container: {
        display: "flex",
        alignItems: "flex-start"
    },
    right_element: {
        alignSelf: "flex-end"
    }
};

/**
 * This pane is a grid positioning two components at the bottom of the page.
 *
 * The bottom side of the two components has to be aligned and this pane
 * does it.
 *
 * This pane also assigns 9 columns to the left component and 3 to the right one.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 * @param {object} leftComponent Component to show on the left side
 * @param {object} rightComponent Component to show on the right side
 */
class BottomGridPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        leftComponent: PropTypes.element,
        rightComponent: PropTypes.element
    };

    render() {

        const { classes } = this.props;

        return (

            <Grid container spacing={8} className={classes.container}>

                <Grid item xs={9}>

                    {this.props.leftComponent}

                </Grid>

                <Grid item xs={3} className={classes.right_element}>

                    {this.props.rightComponent}

                </Grid>

            </Grid>

        )

    }

}

export default withStyles(styles)(BottomGridPane);
