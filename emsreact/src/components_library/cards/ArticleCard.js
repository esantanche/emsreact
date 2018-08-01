// Just a test to refactor
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI functions that make classes and width available
import { withStyles } from "@material-ui/core/styles/index";
import withWidth from '@material-ui/core/withWidth';

// Material UI components
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

// Material UI icons
import MoreHoriz from '@material-ui/icons/MoreHoriz';

// App configuration
import { APP_CONFIGURATION } from '../../appConfiguration';

// Library used to strip html tags from text
import striptags from 'striptags';

// Used to cut text and add '...'
import Dotdotdot from 'react-dotdotdot';

// From component library
import SeparatorPane from '../panes/SeparatorPane';

// Helper function that takes a title and produces a slug
// which is how we put the title in the url
import { title_to_slug } from '../../helpers/title_to_slug';

const styles = {
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
    }
};

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

        // We are going to remove any html tag from the text of the article
        // because we want no html tags when showing the text in the article
        // card
        const stripped_text_content = striptags(text_content);

        // When fetching images' url from the Drupal backend, we get relative paths
        // and we have to prepend the backend root url to access the images
        // The module Pathologic in Drupal makes urls absolutes, but not in this case

        if (width === 'xs') {

            return (
                <React.Fragment>

                    <Grid item xs={12}>

                        <CardMedia
                            className={classes.image_responsive_size}
                            image={APP_CONFIGURATION.backendUrl + image}
                            title=""
                        />

                    </Grid>

                    <SeparatorPane/>

                    <Grid item xs={12}>

                        <Typography variant="body2" component="div">

                            <Dotdotdot clamp={5}>

                                {stripped_text_content}

                            </Dotdotdot>

                        </Typography>

                    </Grid>

                </React.Fragment>
            );

        } else {

            // In this case we want the text to be as high as the image.
            // The dotdotdot component will cut the text and add '...'
            // at the end when the text is as high as the image

            return (
                <React.Fragment>

                    <CardMedia
                        style={{ height: image_fixed_size_according_to_width[width],
                                 width: image_fixed_size_according_to_width[width] }}
                        // className={classes.image_fixed_size}
                        image={APP_CONFIGURATION.backendUrl + image}
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
