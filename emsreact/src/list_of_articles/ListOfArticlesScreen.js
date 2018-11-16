import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Card from '@material-ui/core/Card';
import Button from "@material-ui/core/Button/Button";

// From components library
import InnerGridPane from '../components_library/panes/InnerGridPane';
import ArticleCard from '../components_library/cards/ArticleCard';

// To provide this component with the application context
// See AppContext.js
import AppContext from "../AppContext";
import SeparatorPane from "../components_library/panes/SeparatorPane";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";

/**
 * This Screen shows a list of articles. It's supposed to use the service ArticleService
 * to retrieve them from the backend.
 *
 * If the prop sticky is true, only the articles that are flagged as sticky on the backend
 * will be retrieved.
 *
 * @param {string} topic The topic of articles to show. Like "How I work", "The tools I use",
 * "Success stories", etc.
 * @param {boolean} sticky True if only sticky articles should be displayed
 */
class ListOfArticlesScreen extends Component {

    constructor() {
        super();

        this.state = { articles: [], more: undefined }

    }

    static propTypes = {
        topic: PropTypes.string,
        sticky: PropTypes.bool
    };

    componentDidMount() {

        // Fetching articles when the component mounts

        const { ArticleService } = this.props.services;

        this.ArticleService = ArticleService;

        this.ArticleService.get_articles({ topic: this.props.topic, sticky: this.props.sticky },
            (response) => {

                this.setState({ articles: response.articles, more: response.more });

            }
        )
    }

    componentDidUpdate(prevProps) {

        // When the topic changes, the props to this component change as well
        // We need to fetch the articles related to the new topic

        // Same thing if the prop 'sticky' changes. Again we have to fetch articles again

        if (prevProps.topic !== this.props.topic ||
            prevProps.sticky !== this.props.sticky) {

            this.ArticleService.get_articles({ topic: this.props.topic, sticky: this.props.sticky },
                (response) => {

                    this.setState({ articles: response.articles, more: response.more });

                }
            )

        }

    }

    /**
     * FIXME fix the doc When the menu button, the button made of three lines, il clicked,
     * this function is called and we have to show the menu
     *
     * @param {object} event Click event for menu button
     */
    handleLoadMoreButtonClick = event => {

        // By setting the anchor element for the menu to the menu button
        // the user has just clicked, we show the menu



        // FIXME I called this many times here, maybe I make a function?

        this.ArticleService.get_articles({ topic: this.props.topic, sticky: this.props.sticky },
            (response) => {

                this.setState({ articles: response.articles, more: response.more });

            }
        )

        // this.setState({ anchorElement: event.currentTarget });
    };

    render() {

        // We get articles in an array where each item contains one article
        // We produce another array where each item contains two articles
        // This makes it easier to use the component InnerGridPane to build the list.
        // That component shows two articles at a time (a leftComponent and a
        // rightComponent)

        const articles_pairs = this.state.articles.reduce((articles_pairs, article, index, articles) => {

            if (index % 2 === 0)
                articles_pairs.push(articles.slice(index, index + 2));

            return articles_pairs;

        }, []);



        const fixme_jsx = articles_pairs.map((pair_of_articles, index) => {

            return (

                <InnerGridPane key={index}

                               leftComponent={(

                                   <ArticleCard image={pair_of_articles[0].field_image}
                                                title={pair_of_articles[0].title}
                                                text_content={pair_of_articles[0].body}
                                                article_node_id={Number(pair_of_articles[0].nid)}>

                                   </ArticleCard>

                               )}

                               rightComponent={pair_of_articles.length === 2 ? (

                                   <ArticleCard image={pair_of_articles[1].field_image}
                                                title={pair_of_articles[1].title}
                                                text_content={pair_of_articles[1].body}
                                                article_node_id={Number(pair_of_articles[1].nid)}>

                                   </ArticleCard>

                               ) : (

                                   <Card></Card>

                               )}

                />

            )

        });

        let more_button;

        if (this.state.more && this.props.sticky !== true) {

            // FIXME this button goes to components library of course

            {/*<Grid container spacing={0} className={classes.AlignedGridPane}>*/}

                {/*{this.props.children}*/}

            {/*</Grid>*/}

            {/*<CardActions>*/}
                {/*<Button size="small"*/}
                        {/*href={"/articles/" + topic.name_for_url}>{topic.more_articles_button_label}</Button>*/}
            {/*</CardActions>*/}

            more_button = ( <React.Fragment>
                               <SeparatorPane />
                                <CardActions>
                                    <Button size="small" onClick={this.handleLoadMoreButtonClick.bind(this)}>LOAD MORE</Button>
                                </CardActions>
                               {/*<Button variant="contained">MORE</Button>*/}
                            </React.Fragment> );

        }

        return [ fixme_jsx, more_button ];


        // return articles_pairs.map((pair_of_articles, index) => {
        //
        //     return (
        //
        //         <InnerGridPane key={index}
        //
        //                        leftComponent={(
        //
        //                            <ArticleCard image={pair_of_articles[0].field_image}
        //                                         title={pair_of_articles[0].title}
        //                                         text_content={pair_of_articles[0].body}
        //                                         article_node_id={Number(pair_of_articles[0].nid)}>
        //
        //                            </ArticleCard>
        //
        //                        )}
        //
        //                        rightComponent={pair_of_articles.length === 2 ? (
        //
        //                            <ArticleCard image={pair_of_articles[1].field_image}
        //                                         title={pair_of_articles[1].title}
        //                                         text_content={pair_of_articles[1].body}
        //                                         article_node_id={Number(pair_of_articles[1].nid)}>
        //
        //                            </ArticleCard>
        //
        //                        ) : (
        //
        //                            <Card></Card>
        //
        //                        )}
        //
        //         />
        //
        //     )
        //
        // });

        // });

        // if (this.state.more) {
        //
        //     articles_list_grid += (
        //         <Button size="small"
        //                 >FIXMEMORE</Button>
        //     );
        //
        // }

        // return articles_list_grid;


        // {/* FIXME */
        // }
        //
        // {
        //     this.state.more ?
        //         <Button variant="contained">
        //             MORE
        //         </Button> : <React.Fragment></React.Fragment>
        // }


        // {/*<Button size="small"*/
        // }
        // {/*href={"/articles/" + topic.name_for_url}>{topic.more_articles_button_label}</Button>*/
        // }
        //
        //
        // {/*<Button size="big">MORE</Button>*/
        // }

    }

}

export default props => (
    <AppContext.Consumer>
        {services => <ListOfArticlesScreen {...props} services={services} />}
    </AppContext.Consumer>
);
