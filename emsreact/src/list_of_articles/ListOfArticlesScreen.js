import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI components
import Card from '@material-ui/core/Card';

// From components library
import InnerGridPane from '../components_library/panes/InnerGridPane';
import ArticleCard from '../components_library/cards/ArticleCard';

import AppContext from "../AppContext";

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

        this.state = { articles: [] }

    }

    static propTypes = {
        topic: PropTypes.string,
        sticky: PropTypes.bool
    };

    componentDidMount() {

        // Fetching articles when the component mounts

        const { ArticleService } = this.props.services;

        this.ArticleService = ArticleService;

        var self = this;

        this.ArticleService.fetch_articles({ topic: this.props.topic, sticky: this.props.sticky },
            function (articles) {

                self.setState({ articles: articles });

            }
        )
    }

    componentDidUpdate(prevProps) {

        var self = this;

        // When the topic changes, the props to this component change as well
        // We need to fetch the articles related to the new topic

        // Same thing if the prop 'sticky' changes. Again we have to fetch articles again

        if (prevProps.topic !== this.props.topic ||
            prevProps.sticky !== this.props.sticky) {

            this.ArticleService.fetch_articles({ topic: this.props.topic, sticky: this.props.sticky },
                function (articles) {

                    self.setState({ articles: articles });

                }
            )

        }

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

        return articles_pairs.map((pair_of_articles, index) => {

            return (

                <InnerGridPane key={index}

                    leftComponent={ (

                            <ArticleCard image={pair_of_articles[0].field_image}
                                         title={pair_of_articles[0].title}
                                         text_content={pair_of_articles[0].body}
                                         article_node_id={Number(pair_of_articles[0].nid)}>

                            </ArticleCard>

                    ) }

                    rightComponent={ pair_of_articles.length === 2 ? (

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

        })

    }

}

export default props => (
    <AppContext.Consumer>
        {services => <ListOfArticlesScreen {...props} services={services} />}
    </AppContext.Consumer>
);

// export default injector.connect(ListOfArticlesScreen);
