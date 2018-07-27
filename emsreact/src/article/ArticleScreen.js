import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import FrontGridPane from '../components_library/panes/FrontGridPane';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

import { injector } from 'react-services-injector'; // To use service, see services.js

class ArticleScreen extends Component {

    constructor(props) {
        super(props);

        this.state = { article: [ { } ] };

    }

    componentDidMount() {

        const { ArticleService } = this.services;

        this.ArticleService = ArticleService;

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

                        </CardContent>

                    </Card>

                </FrontGridPane>

            </React.Fragment>

        )

    }

}

export default injector.connect(ArticleScreen, {
    toRender: ['ArticleService']
});

