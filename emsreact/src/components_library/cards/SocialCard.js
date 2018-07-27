import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles/index";

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";

const styles = {
    image_responsive_size: {
        height: "0",
        paddingTop: '100%'
    },
    cardButton: {
        display: "block",
        textAlign: "initial"
    }
};

class SocialCard extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        logo: PropTypes.object,
        url_to_go: PropTypes.string
    };

    render() {

        const { classes, logo, url_to_go } = this.props;

        // ButtonBase makes its children clickable without adding too much style

        return (

            <Card>

                <ButtonBase href={url_to_go} target="_blank" className={classes.cardButton}>
                    <CardMedia
                        className={classes.image_responsive_size}
                        image={logo}
                        title=""
                    />
                </ButtonBase>

            </Card>

        )

    }

}

export default withStyles(styles)(SocialCard);
