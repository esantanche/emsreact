import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI functions that make classes and width available
import { withStyles } from "@material-ui/core/styles/index";

// Material UI components
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

/**
 * Card with logo of social network and link to corresponding social account.
 *
 * They are used in the footer.
 *
 * Props
 * @param {object} classes Classes for button and social logo image
 * @param {string} logo Social logo image as binary, but encoded in a string.
 * The parent component provides it
 * @param {string} url_to_go Url of social network account to link to
 */
class SocialCard extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        logo: PropTypes.string,
        url_to_go: PropTypes.string
    };

    render() {

        const { classes, logo, url_to_go } = this.props;

        // ButtonBase makes its children clickable without adding too much style
        // Instead the component Button would add style you don't want in this case

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
