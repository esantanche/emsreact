import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';

import FrontGridPane from '../components_library/panes/FrontGridPane';
import ListOfArticlesScreen from '../list_of_articles/ListOfArticlesScreen';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

import CardHeader from '@material-ui/core/CardHeader';

import { injector } from 'react-services-injector';
import SeparatorPane from "../components_library/panes/SeparatorPane"; // To use service, see services.js

class TopicScreen extends Component {

    constructor(props) {
        super(props);

        this.state = { topic: {} };

    }


    // FIXME need these?
    static propTypes = {
        topic: PropTypes.string,
        sticky: PropTypes.boolean
    };

    componentDidMount() {

        // const { ArticleService } = this.services;
        //
        // this.ArticleService = ArticleService;

        const { TopicService } = this.services;

        this.TopicService = TopicService;

        //this.props.match.params.topic

        var self = this;

        // First time the component is mounted I find the topic I have to pass to
        // the component ListOfArticlesScreen for it to call the REST api that will
        // return the articles

        // this.props.match.params.topic is the topic in the format that goes on the url
        // this.state.topic.name is the same topic in the format to be used to fetch
        // articles
        // For example:
        // how-i-work is good for urls
        // "How I work" is to be used to fetch articles
        // The service TopicService provides topics good to fetch articles from topics
        // good for urls

        // Consider that the object topic returned by get_topic_from_url is an object
        // containing many properties, not just the name of the topic as it is needed
        // to fetch articles

        this.TopicService.get_topic_from_url(this.props.match.params.topic, function(topic) {

            self.setState({ topic: topic });

        });

    }

    componentDidUpdate(prevProps) {

        var self = this;

        // When the topic changes, the props to this component change as well
        // We need to transform again the topic as provided by the url into
        // the topic as needed to fetch articles

        if (prevProps.match.params.topic !== this.props.match.params.topic) {

            if (this.TopicService) {
                this.TopicService.get_topic_from_url(this.props.match.params.topic, function(topic) {

                    self.setState({ topic: topic });

                });
            }

        }

    }

    render() {

        const topic = this.state.topic;

        // If topic.name is not defined, it means that the topic object that the service TopicService
        // should provide is not yet available.
        // In this case we just render an empty element

        return (

            topic.name ?

            <FrontGridPane>

                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={topic.name} style={{ backgroundColor: topic.color_for_avatar }}>
                                {topic.letter_for_avatar}
                            </Avatar>
                        }
                        action={
                            <IconButton href="/">
                                <Clear />
                            </IconButton>
                        }
                        title={topic.name}
                        subheader={topic.subheader}
                    />

                    <ListOfArticlesScreen topic={topic.name} sticky={false}/>

                    <SeparatorPane/>

                </Card>

            </FrontGridPane>

                :

            <FrontGridPane>

            </FrontGridPane>

        )

    }

}


export default injector.connect(TopicScreen, {
    toRender: ['TopicService']
});

