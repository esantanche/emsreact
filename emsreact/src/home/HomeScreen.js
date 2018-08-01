import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import CardActions from '@material-ui/core/CardActions';
import FrontGridPane from '../components_library/panes/FrontGridPane';
import ListOfArticlesScreen from '../list_of_articles/ListOfArticlesScreen';
import ColouredCard from '../components_library/cards/ColouredCard';

import { injector } from 'react-services-injector'; // To use service, see services.js

// FIXME TODO  https://react-styleguidist.js.org/docs/documenting.html
class HomeScreen extends Component {

    constructor(props) {

        super(props);

        this.state = { articles: [ ], topics: [ ] };

    }

    componentDidMount() {

        const { TopicService } = this.services;

        this.TopicService = TopicService;

        var self = this;

        this.TopicService.get_topics(function(topics) {

            self.setState({ topics: topics });

        });

    }

    render() {

        return (

            <React.Fragment>

                <FrontGridPane>

                    {/*FIXME this card should become a component in component library*/}

                    <ColouredCard>

                        <CardContent>

                            <Typography variant="title" >

                                Hello, my name is Emanuele Santanché. I am a Web Developer and build websites and web applications
                                using JavaScript, React, Angular, WordPress, Drupal, HTML5, CSS3, CSSinJS.

                            </Typography>

                        </CardContent>

                    </ColouredCard>

                </FrontGridPane>

                { this.state.topics.length > 0 ?

                    this.state.topics.map(topic => {

                        return (

                            <React.Fragment>

                                <FrontGridPane>

                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label={topic.name} style={{ backgroundColor: topic.color_for_avatar }}>
                                                    {topic.letter_for_avatar}
                                                </Avatar>
                                            }
                                            // action={
                                            //     <IconButton>
                                            //         <MoreVertIcon />
                                            //     </IconButton>
                                            // }
                                            title={topic.name}
                                            subheader={topic.subheader}
                                        />

                                        <ListOfArticlesScreen topic={topic.name} sticky={true}/>

                                        <CardActions>
                                            <Button size="small"
                                                    href={"/articles/" + topic.name_for_url}>{topic.more_articles_button_label}</Button>
                                        </CardActions>

                                    </Card>

                                </FrontGridPane>

                            </React.Fragment>

                        );

                    })

                    :

                    ( <React.Fragment></React.Fragment> )

                }

            </React.Fragment>

        );
    }
}

export default injector.connect(HomeScreen, {
    toRender: ['ArticleService']
});
