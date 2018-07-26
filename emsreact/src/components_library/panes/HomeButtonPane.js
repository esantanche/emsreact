import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

const styles = {
    HomeButtonPane: {
        marginLeft: "1em"
    },
};

class HomeButtonPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {

        const { classes } = this.props;

        return (



            <div className={classes.HomeButtonPane}>

                {this.props.children}

            </div>

        )

    }

}

export default withStyles(styles)(HomeButtonPane);
