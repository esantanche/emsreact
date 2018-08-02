import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI functions that make classes and width available
import { withStyles } from "@material-ui/core/styles/index";
import withWidth from "@material-ui/core/es/withWidth/withWidth";

const styles = {
    HomeButtonPane: {
        marginLeft: "1em"
    },
    TopAndBottomMargins: {
        marginTop: "1em",
        marginBottom: "1em"
    }
};

/**
 * This pane defines margins for the home button, the one in the header that links
 * to the home page and has "Emanuele Santanché, Web Developer" written on it.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 * @param {string} width Material UI device width (xs, sm, md, lg, xl). The function withWidth
 * provides it.
 */
class HomeButtonPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        width: PropTypes.string
    };

    render() {

        const { classes, width } = this.props;

        // For width other than 'xs', let's add top and bottom margins.
        // For 'xs' width there will be no margins

        return (

            <div className={classes.HomeButtonPane +
                            (width !== "xs" ? " " + classes.TopAndBottomMargins : "")}>

                {this.props.children}

            </div>

        )

    }

}

export default withWidth()(withStyles(styles)(HomeButtonPane));
