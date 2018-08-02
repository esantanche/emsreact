import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Typography from "@material-ui/core/Typography";

// Material UI functions that make classes and width available
import { withStyles } from "@material-ui/core/styles/index";
import withWidth from "@material-ui/core/withWidth";

const styles = {
    HomeButtonText: {
        lineHeight: "1.5em"
    }
};

/**
 * The text component used for the home button.
 * It changes the variant of the Typography component according to
 * device width.
 *
 * On small devices a smaller font is used.
 *
 * Props
 * @param {object} classes Classes injected by withStyles function
 * @param {string} width Material UI device width (xs, sm, md, lg, xl). The function withWidth
 * provides it.
 */
class HomeButtonText extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        width: PropTypes.string
    };

    render() {

        const { classes, width } = this.props;

        return (

            <Typography variant={ ['xs', 'sm'].indexOf(width) >= 0 ? "body2" : "headline" }
                        className={classes.HomeButtonText}>
                {this.props.children}
            </Typography>

        )

    }

}

export default withWidth()(withStyles(styles)(HomeButtonText));
