import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerGridPane from '../components_library/panes/InnerGridPane';
import ArticleCard from '../components_library/cards/ArticleCard';
import Card from '@material-ui/core/Card';
import red from "@material-ui/core/colors/red";
import lightBlue from "@material-ui/core/colors/lightBlue";

import { injector } from 'react-services-injector'; // To use service, see services.js

// import striptags from 'striptags';

// import { withStyles } from "@material-ui/core/styles/index";
// import withWidth from '@material-ui/core/withWidth';



// import SeparatorPane from '../panes/SeparatorPane';


class ListOfArticlesScreen extends Component {

    constructor() {
        super();

        this.state = { articles: [] }

    }

    // FIXME need these?
    static propTypes = {
        // classes: PropTypes.object.isRequired,
        // articles: PropTypes.array
        // image: PropTypes.object,
        // text_content: PropTypes.string
        topic: PropTypes.string,
        sticky: PropTypes.boolean
    };

    componentDidMount() {

        const { ArticleService } = this.services;

        this.ArticleService = ArticleService;

        var self = this;

        this.ArticleService.fetch_articles({ topic: this.props.topic, sticky: this.props.sticky },
            function (articles) {

                // console.log('componentDidMount articles');
                // console.log(articles);

                self.setState({ articles: articles });

            }
        )
    }

    componentDidUpdate(prevProps) {

        var self = this;

        // When the topic changes, the props to this component change as well
        // We need to transform again the topic as provided by the url into
        // the topic as needed to fetch articles

        if (prevProps.topic !== this.props.topic) {

            this.ArticleService.fetch_articles({ topic: this.props.topic, sticky: this.props.sticky },
                function (articles) {

                    // console.log('componentDidMount articles');
                    // console.log(articles);

                    self.setState({ articles: articles });

                }
            )

        }

    }

    render() {

        const articles_pairs = this.state.articles.reduce((articles_pairs, article, index, articles) => {

            if (index % 2 === 0)
                articles_pairs.push(articles.slice(index, index + 2));

            return articles_pairs;

        }, []);

        return articles_pairs.map(pair_of_articles => {

            return (

                <InnerGridPane

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

export default injector.connect(ListOfArticlesScreen, {
    toRender: ['ArticleService']
});
