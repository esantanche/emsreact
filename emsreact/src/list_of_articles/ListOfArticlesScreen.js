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

class ListOfArticlesScreen extends Component {

    // FIXME need these?
    static propTypes = {
        // classes: PropTypes.object.isRequired,
        articles: PropTypes.array
        // image: PropTypes.object,
        // text_content: PropTypes.string
    };

    render() {

        // const title_variant_according_to_width = {
        //     xs: "title",
        //     sm: "title",
        //     md: "subheading",
        //     lg: "title",
        //     xl: "title"
        // };

        // let articles_pairs = [];
        // let article = {};
        // let index = 0;

        const articles_pairs = this.props.articles.reduce((articles_pairs, article, index, articles) => {

            if (index % 2 === 0)
                articles_pairs.push(articles.slice(index, index + 2));

            return articles_pairs;

        }, []);

        console.log("ListOfArticlesScreen");
        console.log(articles_pairs);

        // const { classes, title, width, image, text_content } = this.props;
        //
        // const jsx_fragment_for_image_and_text_according_to_width =
        //     this.produce_jsx_fragment_for_image_and_text_according_to_width(width, classes, image, text_content);

        return articles_pairs.map(pair_of_articles => {

            return (

                <InnerGridPane

                    leftComponent={ (

                            <ArticleCard image={pair_of_articles[0].field_image}
                                         title={pair_of_articles[0].title}
                                         text_content={pair_of_articles[0].body}
                                         article_node_id={pair_of_articles[0].nid}>

                            </ArticleCard>

                    ) }

                    rightComponent={ pair_of_articles.length === 2 ? (

                            <ArticleCard image={pair_of_articles[1].field_image}
                                         title={pair_of_articles[1].title}
                                         text_content={pair_of_articles[1].body}
                                         article_node_id={pair_of_articles[1].nid}>

                            </ArticleCard>

                    ) : (

                        <Card></Card>

                    )}


                />


            )


        })

    }

}

export default ListOfArticlesScreen;

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