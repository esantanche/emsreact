import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Avatar from "@material-ui/core/Avatar";

/**
 * Avatar for lists of articles.
 *
 * @param {string} label This is a label for ARIA (Accessible Rich Internet Applications)
 * @param {string} color Color for the avatar
 * @param {string} letter Letter for the avatar
 */
class MasterAvatar extends Component {

    static propTypes = {
        label: PropTypes.string,
        color: PropTypes.string,
        letter: PropTypes.string
    };

    render() {

        const { label, color, letter } = this.props;

        return (

            <Avatar aria-label={label} style={{ backgroundColor: color }}>
                {letter}
            </Avatar>

        )
    }

}

export default MasterAvatar;

