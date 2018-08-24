import React, { Component } from 'react';

// Material UI components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// From components library
import FrontGridPane from '../components_library/panes/FrontGridPane';
import ColouredCard from '../components_library/cards/ColouredCard';
import MasterAvatar from "../components_library/avatars/MasterAvatar";

// Shows lists of articles
import ListOfArticlesScreen from '../list_of_articles/ListOfArticlesScreen';

// To provide this component with the application context
// See AppContext.js
import AppContext from '../AppContext';

/**
 * Home Screen. Header and Footer are not here.
 *
 * Here you find the presentation text ("Hello, my name is Emanuele Santanché.
 * I am a Web Developer and build websites and web applications using JavaScript,
 * React, Angular, WordPress, Drupal, HTML5, CSS3, CSSinJS.")
 * and the lists of articles separated by topic.
 *
 * The TopicService provides details about each topic.
 *
 * These details are used to show the avatar for each list of articles, the title, the subtitle
 * and the link to more articles for the same topic.
 *
 * On the home page only sticky articles are shown. Articles are flagged as sticky in the backend.
 */
class HomeScreen extends Component {

    constructor(props) {

        super(props);

        this.state = { articles: [ ], topics: [ ] };

    }

    /**
     * Fetching details about the topics to show on the home page (How I work, The tools I use, etc.).
     */
    componentDidMount() {

        const { TopicService } = this.props.services;

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

                    this.state.topics.map((topic, index) => {

                        return (

                            <React.Fragment key={index}>

                                <FrontGridPane>

                                    <Card>
                                        <CardHeader
                                            avatar={

                                                <MasterAvatar color={topic.color_for_avatar}
                                                              letter={topic.letter_for_avatar}
                                                              label={topic.name} />


                                            }

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

export default props => (
    <AppContext.Consumer>
        {services => <HomeScreen {...props} services={services} />}
    </AppContext.Consumer>
);
