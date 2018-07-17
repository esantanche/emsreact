// Just a test to refactor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InnerGridPane from '../components_library/panes/InnerGridPane';
import ArticleCard from '../components_library/cards/ArticleCard';
import Card from '@material-ui/core/Card';
import FrontGridPane from '../components_library/panes/FrontGridPane';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

import { injector } from 'react-services-injector'; // To use service, see services.js

// import striptags from 'striptags';

// import { withStyles } from "@material-ui/core/styles/index";
// import withWidth from '@material-ui/core/withWidth';


import testimage from '../images/6747806-xsmall.jpg';

// import Dotdotdot from 'react-dotdotdot';

class ArticleScreen extends Component {

    constructor(props) {
        super(props);

        this.state = { article: [ { } ] };

        // console.log('constructor state');
        // console.log(this.state);
        // console.log(this.state.articles[0]);

    }

    // FIXME need these?
    // static propTypes = {
    //     // classes: PropTypes.object.isRequired,
    //     articles: PropTypes.array
    //     // image: PropTypes.object,
    //     // text_content: PropTypes.string
    // };

    componentDidMount() {

        const { ArticleService } = this.services;

        this.ArticleService = ArticleService;

        // const articles = this.ArticleService.fetch_articles_for_test();

        var self = this;

        // The tools I use
        // How I work

        // FIXME excpt what if articlenid is not defined?

        this.ArticleService.fetch_articles({ nid: this.props.match.params.articlenid },
            function (article) {

                console.log('componentDidMount article');
                console.log(article);

                self.setState({ article: article });

            }

        )

    }

    render() {

        return (

            <React.Fragment>

                <FrontGridPane>

                    {/*FIXME this card should become a component in component library*/}

                    <Card>

                        <CardHeader title={this.state.article[0].title}
                                    action={
                                        <IconButton href="/">
                                            <Clear />
                                        </IconButton>
                                    }/>

                        <CardContent>

                            <Typography variant="body1" component="div">

                                <div dangerouslySetInnerHTML={{ __html: this.state.article[0].body }} />

                            </Typography>

                            {/*<Typography variant="title" >*/}

                                {/*Hello, my name is Emanuele Santanché. I am a Web Developer and build websites and web applications*/}
                                {/*using JavaScript, React, Angular, WordPress, Drupal, HTML5, CSS3, CSSinJS.*/}

                            {/*</Typography>*/}

                        </CardContent>

                    </Card>

                </FrontGridPane>

                {/*<Card>*/}

                    {/*Title: { this.state.article[0] ? this.state.article[0].title : "" }*/}

                {/*</Card>*/}

            </React.Fragment>

        )




    }

}


export default injector.connect(ArticleScreen, {
    toRender: ['ArticleService']
});

