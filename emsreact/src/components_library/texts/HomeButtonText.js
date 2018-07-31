import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";

const styles = {
    HomeButtonText: {
        lineHeight: "1.5em",
        color: "white"
    }
};

class HomeButtonText extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
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
