// Just a test to refactor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import striptags from 'striptags';

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

import { title_to_slug } from '../../helpers/title_to_slug';

const styles = theme => ({
    card_header: {
        height: "6em",
        display: "flex",
        alignItems: "center",
        paddingLeft: "24px",
        paddingRight: "24px"
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
    // image_large_fixed_size: {
    //     height: "200px",
    //     width: "200px"
    // },
    typography_when_below_image: {
        marginTop: "10px"
    },
    title: {
        fontSize: "1px"
    }
});

class ArticleCard extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        title: PropTypes.string,
        image: PropTypes.string,
        text_content: PropTypes.string,
        article_node_id: PropTypes.number
    };

    produce_jsx_fragment_for_image_and_text_according_to_width(width, classes, image, text_content) {

        const image_fixed_size_according_to_width = {
            sm: "150px",
            md: "150px",
            lg: "180px",
            xl: "200px"
        };

        const stripped_text_content = striptags(text_content);

        // FIXME the url of the backend goes to parameters
        // FIXME do I need a title for CardMedia?

        if (width === 'xs') {

            return (
                <React.Fragment>

                    <Grid item xs={12}>

                        <CardMedia
                            className={classes.image_responsive_size}
                            image={"http://backend.emanuelesantanche.com/" + image}
                            title=""
                        />

                    </Grid>

                    <SeparatorPane/>

                    <Grid item xs={12}>

                        <Typography variant="body2" component="div">

                            {stripped_text_content}

                        </Typography>

                    </Grid>

                </React.Fragment>
            );

        } else {

            return (
                <React.Fragment>

                    <CardMedia
                        style={{ height: image_fixed_size_according_to_width[width],
                                 width: image_fixed_size_according_to_width[width] }}
                        // className={classes.image_fixed_size}
                        image={"http://backend.emanuelesantanche.com/" + image}
                        title=""
                    />

                    <Typography variant="body2" component="div"
                                style={{ flex: "1", height: image_fixed_size_according_to_width[width], marginLeft: "10px" }}>

                        <Dotdotdot clamp={image_fixed_size_according_to_width[width]}
                                   style={{ height: image_fixed_size_according_to_width[width] }}>

                            {stripped_text_content}

                        </Dotdotdot>

                    </Typography>

                </React.Fragment>
            );

        }

    }

    render() {

        const title_variant_according_to_width = {
            xs: "title",
            sm: "title",
            md: "subheading",
            lg: "title",
            xl: "title"
        };

        const { classes, title, width, image, text_content, article_node_id } = this.props;

        const jsx_fragment_for_image_and_text_according_to_width =
            this.produce_jsx_fragment_for_image_and_text_according_to_width(width, classes, image, text_content);

        // FIXME link to article to fix

        const slug_for_link_to_article = title_to_slug(title);

        return (

            <Card>

                {/*Used a div because the component CardHeader uses a headline variant of Typography while I    */}
                {/*need the possibility to change font size*/}
                {/*style={{ height: "6em", display: "flex", alignItems: "center", paddingLeft: "24px", paddingRight: "24px" }}*/}

                <div className={classes.card_header}>

                    <Typography variant={title_variant_according_to_width[width]}>
                        {title}
                    </Typography>

                </div>

                <CardContent>

                    <Grid container spacing={0} className={classes.container}>

                        {jsx_fragment_for_image_and_text_according_to_width}

                    </Grid>

                </CardContent>

                <CardActions>
                    <IconButton style={{ marginLeft: "auto" }} href={"/article/" + article_node_id + "/" + slug_for_link_to_article}>
                        <MoreHoriz/>
                    </IconButton>
                </CardActions>

            </Card>

        )

    }

}

export default withWidth()(withStyles(styles)(ArticleCard));
