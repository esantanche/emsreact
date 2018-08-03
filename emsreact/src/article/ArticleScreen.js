import React, { Component } from 'react';

// Material UI components
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// Material UI icons
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

// From components library
import FrontGridPane from '../components_library/panes/FrontGridPane';

// The injector allows this component to use services, see README.md in folder 'services'
import { injector } from 'react-services-injector';

/**
 * Screen showing a single article. The text can contain html tags. In this case we render them.
 */
class ArticleScreen extends Component {

    constructor(props) {
        super(props);

        this.state = { article: [ { } ] };

    }

    /**
     * When the component mounts, we fetch the article we have to display.
     *
     * The url that triggers displaying this Screen is like this:
     * /article/:articlenid
     *
     * For example it can be: /article/27
     *
     * The number is the node id of the article in the Drupal backend.
     *
     * This component uses the service ArticleService for it to fetch
     * that specific article.
     */
    componentDidMount() {

        if (!this.props.match.params.articlenid) {

            console.error("ArticleScreen::componentDidMount");
            console.error("this.props.match.params.articlenid is not defined");
            console.error("This is a bug");

            return;
        }

        const { ArticleService } = this.services;

        this.ArticleService = ArticleService;

        var self = this;

        this.ArticleService.fetch_articles({ nid: this.props.match.params.articlenid },
            function (article) {

                self.setState({ article: article });

            }

        )

    }

    render() {

        return (

            <React.Fragment>

                <FrontGridPane>

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

export default injector.connect(ArticleScreen);
