import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
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

class HomeButtonPane extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {

        const { classes, width } = this.props;

        let classes_to_use = { main: classes.HomeButtonPane };

        // For width other than 'xs', let's add top and bottom margins.
        // For 'xs' width there will be no margins
        if (width !== "xs")
            classes_to_use.margins = classes.TopAndBottomMargins;

        return (

            <div className={classes_to_use.main + " " + classes_to_use.margins}>

                {this.props.children}

            </div>

        )

    }

}

export default withWidth()(withStyles(styles)(HomeButtonPane));

{/*<div className={classes_to_use.join(" ")}>*/}
