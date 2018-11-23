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

        this.get_articles_from_article_service();

    }

    componentDidUpdate(prevProps) {

        // When the topic changes, the props to this component change as well
        // We need to fetch the articles related to the new topic

        // Same thing if the prop 'sticky' changes. Again we have to fetch articles again

        if (prevProps.topic !== this.props.topic ||
            prevProps.sticky !== this.props.sticky) {

            this.get_articles_from_article_service();

        }

    }

    /**
     * Fetching more articles when the user clicks on "LOAD MORE"
     *
     */
    handleLoadMoreButtonClick = () => {

        this.get_articles_from_article_service();
    };

    /**
     * Function that calls the article service to fetch more articles or just the first time
     * to fetch the first page
     */
    get_articles_from_article_service() {

        this.ArticleService.get_articles({ topic: this.props.topic, sticky: this.props.sticky },
            (response) => {

                this.setState({ articles: response.articles, more: response.more });

            }
        )

    }

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

        const jsx_for_list_of_articles = articles_pairs.map((pair_of_articles, index) => {

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

        // Only if there are more articles to fetch we show the LOAD MORE button
        // If we are fetching sticky articles, we fetch only the first page because
        // we don't want more than one page of articles to be sticky.
        // Sticky articles are what you see on the home page
        if (this.state.more && this.props.sticky !== true) {

            more_button = ( <React.Fragment>
                               <SeparatorPane />
                                <CardActions>
                                    <Button size="small" onClick={this.handleLoadMoreButtonClick.bind(this)}>LOAD MORE</Button>
                                </CardActions>
                            </React.Fragment> );

        }

        return [ jsx_for_list_of_articles, more_button ];

    }

}

export default props => (
    <AppContext.Consumer>
        {services => <ListOfArticlesScreen {...props} services={services} />}
    </AppContext.Consumer>
);
