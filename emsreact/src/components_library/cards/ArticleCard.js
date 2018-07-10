// Just a test to refactor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles/index";
import withWidth from '@material-ui/core/withWidth';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

import Dotdotdot from 'react-dotdotdot';

import SeparatorPane from '../panes/SeparatorPane';

const styles = theme => ({
    card_header: {
        height: "6em"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch"
    },
    image_responsive_size: {
        height: "0",
        paddingTop: '100%'
    },
    image_fixed_size: {
        height: "200px",
        width: "200px"
    },
    typography_when_below_image: {
        marginTop: "10px"
    }
});

class ArticleCard extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        title: PropTypes.string,
        image: PropTypes.object,
        text_content: PropTypes.string
    };

    render() {

        const { classes, title, width, image, text_content } = this.props;

        return (

            <Card>

                <CardHeader title={title}
                            className={classes.card_header}>

                </CardHeader>

                <CardContent>

                    {/*style={{ height: "200px" }}*/}

                    <Grid container spacing={0} className={classes.container}>

                        { width === "xs" ? (

                                <React.Fragment>

                                    <Grid item xs={12}>

                                        <CardMedia
                                            className={classes.image_responsive_size}
                                            image={image}
                                            title=""
                                        />

                                    </Grid>

                                    <SeparatorPane/>

                                    <Grid item xs={12}>

                                        <Typography variant="body2" component="p">

                                            {text_content}

                                        </Typography>

                                    </Grid>

                                </React.Fragment>

                            )

                            :

                            (

                                <React.Fragment>

                                    <CardMedia
                                        className={classes.image_fixed_size}
                                        image={image}
                                        title=""
                                    />

                                    <Typography variant="body2" component="p"
                                                style={{ flex: "1", height: "200px", marginLeft: "10px" }}>

                                        <Dotdotdot clamp="200px" style={{ height: "200px" }}>

                                            {text_content}

                                        </Dotdotdot>

                                    </Typography>

                                </React.Fragment>

                            )
                        }

                    </Grid>

                </CardContent>

                <CardActions>
                    <IconButton style={{ marginLeft: "auto" }}>
                        <MoreHoriz/>
                    </IconButton>
                </CardActions>

            </Card>

        )

    }

}

// export default (HomeScreen);


export default withWidth()(withStyles(styles)(ArticleCard));
