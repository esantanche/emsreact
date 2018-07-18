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

import { injector } from 'react-services-injector'; // To use service, see services.js

// import teal from "@material-ui/core/colors/teal";

import theme from '../MuiTheme';
import ArticleService from "../services/article/ArticleService";

// FIXME TODO  https://react-styleguidist.js.org/docs/documenting.html
class HomeScreen extends Component {

    // FIXME text is supposed to always have a (...) at the end possibly being cut out by the dotdotdot
    // library

    // { title: "initial", body: "initial" }, {}, {}

    constructor(props) {

        super(props);

        this.state = { articles: [ ], topics: [ ] };

    }

    componentDidMount() {

        const { ArticleService } = this.services;

        this.ArticleService = ArticleService;

        const { TopicService } = this.services;

        this.TopicService = TopicService;

        var self = this;

        this.TopicService.get_topics(function(topics) {

            // self.topics = topics;
            self.setState({ topics: topics });
            // console.log('HomeScreen - componentDidMount');
            // console.log(self.state.topics);

        });

    }

    // There are some FontIcon elements that have style={{ width: "20px" }} added. It's because the icon
    // is defective and doesn't have proper width.
    render() {

        // const { width } = this.props;

        //const { theme } = this.props;

        // FIXME should use withTheme, but not here, this stuff should go to the component library

        //const color_who_am_i_message_card = theme.palette.primary.light;
        const color_who_am_i_message_card = theme.palette.secondary.light;

        // console.log(theme);
        // console.log(theme.palette.primary.light);

        return (

            <React.Fragment>

                <FrontGridPane>

                    {/*FIXME this card should become a component in component library*/}

                    <Card style={{ backgroundColor: color_who_am_i_message_card }}>

                        <CardContent>
                            <Typography variant="title" >

                                Hello, my name is Emanuele Santanché. I am a Web Developer and build websites and web applications
                                using JavaScript, React, Angular, WordPress, Drupal, HTML5, CSS3, CSSinJS.

                            </Typography>

                        </CardContent>

                    </Card>

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

                {/*<FrontGridPane>*/}

                    {/*<Card>*/}
                        {/*<CardHeader*/}
                            {/*avatar={*/}
                                {/*<Avatar aria-label="How I work" style={{ backgroundColor: "#880000" }}>*/}
                                    {/*W*/}
                                {/*</Avatar>*/}
                            {/*}*/}
                            {/*// action={*/}
                            {/*//     <IconButton>*/}
                            {/*//         <MoreVertIcon />*/}
                            {/*//     </IconButton>*/}
                            {/*// }*/}
                            {/*title="How I work"*/}
                            {/*subheader="There is value in doing things properly first time"*/}
                        {/*/>*/}

                        {/*<ListOfArticlesScreen topic="How I work" sticky={true}/>*/}

                        {/*<CardActions>*/}
                            {/*<Button size="small">More articles</Button>*/}
                        {/*</CardActions>*/}

                    {/*</Card>*/}

                {/*</FrontGridPane>*/}

                {/*this.state.articles[0].title*/}
                {/*this.state.articles[0].body*/}

                {/*<div dangerouslySetInnerHTML={{ __html: this.state.articles[0].body }} />*/}

                {/*<ArticleCard image={testimage}*/}
                             {/*title={this.state.articles[0].title}*/}
                             {/*text_content={this.state.articles[0].body}>*/}

                {/*</ArticleCard>*/}


            </React.Fragment>

        );
    }
}

//export default HomeScreen;

// export default withWidth()(HomeScreen);


export default injector.connect(HomeScreen, {
    toRender: ['ArticleService']
});
