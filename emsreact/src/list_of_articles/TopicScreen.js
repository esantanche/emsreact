import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerGridPane from '../components_library/panes/InnerGridPane';
import ArticleCard from '../components_library/cards/ArticleCard';
import Card from '@material-ui/core/Card';
import red from "@material-ui/core/colors/red";
import lightBlue from "@material-ui/core/colors/lightBlue";
import FrontGridPane from '../components_library/panes/FrontGridPane';
import ListOfArticlesScreen from '../list_of_articles/ListOfArticlesScreen';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

import CardHeader from '@material-ui/core/CardHeader';

import { injector } from 'react-services-injector'; // To use service, see services.js

// import striptags from 'striptags';

// import { withStyles } from "@material-ui/core/styles/index";
// import withWidth from '@material-ui/core/withWidth';



// import SeparatorPane from '../panes/SeparatorPane';


class TopicScreen extends Component {

    constructor() {
        super();

        this.state = { topic: {} }

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

        // const { ArticleService } = this.services;
        //
        // this.ArticleService = ArticleService;

        var self = this;

        const { TopicService } = this.services;

        this.TopicService = TopicService;

        //this.props.match.params.topic

        this.TopicService.get_topic_from_url(this.props.match.params.topic, function(topic) {

            // self.topics = topics;
            self.setState({ topic: topic });
            // console.log('HomeScreen - componentDidMount');
            // console.log(self.state.topics);

        });


    }

    render() {



        const topic = this.state.topic;



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

                </Card>

            </FrontGridPane>

                :

            <FrontGridPane>


            </FrontGridPane>

            // <div>
            //
            //     topic name: {this.state.topic.name}
            //
            //
            // </div>

        )

    }

}


export default injector.connect(TopicScreen, {
    toRender: ['TopicService']
});

// export default ListOfArticlesScreen;
