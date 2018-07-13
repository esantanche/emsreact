// Just a test to refactor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerGridPane from '../components_library/panes/InnerGridPane';
import ArticleCard from '../components_library/cards/ArticleCard';
import Card from '@material-ui/core/Card';


// import striptags from 'striptags';

// import { withStyles } from "@material-ui/core/styles/index";
// import withWidth from '@material-ui/core/withWidth';


import testimage from '../images/6747806-xsmall.jpg';

// import Dotdotdot from 'react-dotdotdot';

// import SeparatorPane from '../panes/SeparatorPane';

//FIXME need these?
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

class ArticleScreen extends Component {

    // FIXME need these?
    // static propTypes = {
    //     // classes: PropTypes.object.isRequired,
    //     articles: PropTypes.array
    //     // image: PropTypes.object,
    //     // text_content: PropTypes.string
    // };

    render() {



        // const { classes, title, width, image, text_content } = this.props;
        //
        // const jsx_fragment_for_image_and_text_according_to_width =
        //     this.produce_jsx_fragment_for_image_and_text_according_to_width(width, classes, image, text_content);

        return (

            <Card>

                this is article sinlg one
                should show the url here


            </Card>


        )




    }

}

export default ArticleScreen;

// export default withWidth()(withStyles(styles)(ListOfArticlesScreen));

// {  this.props.articles.map((article, index) =>
//     {
//
//
//     }
//
// ) }

//
// {/*<InnerGridPane*/}
//
// {/*leftComponent={ (*/}
//
// {/*<ArticleCard image={testimage}*/}
// {/*title={this.props.articles[0].title}*/}
// {/*text_content={this.props.articles[0].body}>*/}
//
// {/*</ArticleCard>*/}
//
// {/*) }*/}
//
// {/*rightComponent={ (*/}
//
// {/*<ArticleCard image={testimage}*/}
// {/*title={this.props.articles[1].title}*/}
// {/*text_content={this.props.articles[1].body}>*/}
//
// {/*</ArticleCard>*/}
//
// {/*) }*/}
// {/*/>*/}