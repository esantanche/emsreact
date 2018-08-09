import React, { Component } from 'react';

// Material UI components
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';

// Material UI icons
import Clear from '@material-ui/icons/Clear';

// From components library
import FrontGridPane from '../components_library/panes/FrontGridPane';
import SeparatorPane from "../components_library/panes/SeparatorPane";

// Screen that shows a list of articles
import ListOfArticlesScreen from '../list_of_articles/ListOfArticlesScreen';

// The injector allows this component to use services, see README.md in folder 'services'
//import { injector } from 'react-services-injector';

import AppContext from '../AppContext';


/**
 * This screen shows a list of articles for a given topic.
 *
 * Both sticky and non-sticky articles are shown.
 *
 * For now there is no pagination. All articles are shown.
 *
 * When this screen is mounted, the url is like this:
 * "/articles/:topic"
 *
 * Props will provide the parameter 'topic' in this variable: this.props.match.params.topic
 */
class TopicScreen extends Component {

    constructor(props) {
        super(props);

        this.state = { topic_details: {} };
    }

    componentDidMount() {

        if (!this.props.match.params.topic) {

            console.error("TopicScreen::componentDidMount");
            console.error("this.props.match.params.topic is not defined");
            console.error("This is a bug");

            return;
        }

        const { TopicService } = this.props.services;

        this.TopicService = TopicService;

        var self = this;

        // First time the component is mounted we find the topic we have to pass to
        // the component ListOfArticlesScreen for it to call the service that will
        // return the articles

        // this.props.match.params.topic is the topic in the format that goes on the url
        // this.state.topic_details.name is the same topic in the format to be used to fetch
        // articles
        // For example:
        // how-i-work is good for urls
        // "How I work" is to be used to fetch articles
        // The service TopicService provides topics good to fetch articles from topics
        // good for urls

        // Consider that the object topic_details returned by get_topic_from_url is an object
        // containing many properties, not just the name of the topic as it is needed
        // to fetch articles

        this.TopicService.get_topic_from_url(this.props.match.params.topic, function(topic_details) {

            self.setState({ topic_details: topic_details });

        });

    }

    componentDidUpdate(prevProps) {

        var self = this;

        // When the topic changes, the props to this component change as well
        // We need to transform again the topic as provided by the url into
        // the topic as needed to fetch articles

        if (prevProps.match.params.topic !== this.props.match.params.topic) {

            if (this.TopicService) {
                this.TopicService.get_topic_from_url(this.props.match.params.topic, function(topic_details) {

                    self.setState({ topic_details: topic_details });

                });
            }

        }

    }

    render() {

        const topic_details = this.state.topic_details;

        // If topic_details.name is not defined, it means that the topic_details object that the service TopicService
        // should provide is not yet available.
        // In this case we just render an empty element

        return (

            topic_details.name ?

            <FrontGridPane>

                <Card>
                    <CardHeader
                        avatar={
                            <Avatar aria-label={topic_details.name} style={{ backgroundColor: topic_details.color_for_avatar }}>
                                {topic_details.letter_for_avatar}
                            </Avatar>
                        }
                        action={
                            <IconButton href="/">
                                <Clear />
                            </IconButton>
                        }
                        title={topic_details.name}
                        subheader={topic_details.subheader}
                    />

                    <ListOfArticlesScreen topic={topic_details.name} sticky={false}/>

                    <SeparatorPane/>

                </Card>

            </FrontGridPane>

                :

            <FrontGridPane>

            </FrontGridPane>

        )

    }

}


export default props => (
    <AppContext.Consumer>
        {services => <TopicScreen {...props} services={services} />}
    </AppContext.Consumer>
);

// export default injector.connect(TopicScreen);

