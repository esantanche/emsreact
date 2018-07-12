import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
// import CardMedia from '@material-ui/core/CardMedia';
import testimage from '../images/6747806-xsmall.jpg';
import testimage2 from '../images/6484991-xsmall.jpg';
import Button from '@material-ui/core/Button';
// import Toc from '@material-ui/icons/Toc';
// import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreHoriz from '@material-ui/icons/MoreHoriz';
// import Dotdotdot from 'react-dotdotdot';
import withWidth from '@material-ui/core/withWidth';
import FrontGridPane from '../components_library/panes/FrontGridPane';
import InnerGridPane from '../components_library/panes/InnerGridPane';
import ArticleCard from '../components_library/cards/ArticleCard';

import { injector } from 'react-services-injector'; // To use service, see services.js

// import teal from "@material-ui/core/colors/teal";

import theme from '../MuiTheme';
import ArticleService from "../services/article/ArticleService";

// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// FIXME TODO  https://react-styleguidist.js.org/docs/documenting.html
class HomeScreen extends Component {

    // FIXME text is supposed to always have a (...) at the end possibly being cut out by the dotdotdot
    // library

    constructor() {
        super();

        this.state = { articles: [] };
    }

    componentDidMount() {

        const { ArticleService } = this.services;

        this.ArticleService = ArticleService;

        const articles = this.ArticleService.fetch_articles_for_test();

        console.log(articles);

    }

        // There are some FontIcon elements that have style={{ width: "20px" }} added. It's because the icon
    // is defective and doesn't have proper width.
    render() {

        // const { width } = this.props;

        //const { theme } = this.props;

        // FIXME should use withTheme, but not here, this stuff should go to the component library

        //const color_who_am_i_message_card = theme.palette.primary.light;
        const color_who_am_i_message_card = theme.palette.secondary.main;

        console.log(theme);
        console.log(theme.palette.primary.light);

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

                <FrontGridPane>

                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="How I work" style={{ backgroundColor: "#880000" }}>
                                    W
                                </Avatar>
                            }
                            // action={
                            //     <IconButton>
                            //         <MoreVertIcon />
                            //     </IconButton>
                            // }
                            title="How I work"
                            subheader="There is value in doing things properly first time"
                        />

                        <InnerGridPane

                            leftComponent={ (

                                <ArticleCard image={testimage}
                                             title="How do I protect my investment in bespoke software?"
                                             text_content="It’s not about money only. When we create something, we would like it not to go down the sink too quickly.

                                                                Sure nothing lasts forever, but if what we create shows to be useful for as long as it can, all the better.

                                                                How to do this when technologies crop up as quickly as mushrooms after a rain storm and disappear as quickly?

                                                                Software development is about problem solving. It isn’t about technologies.

                                                                When you write a piece of software, you are describing a way to solve a problem.">

                                </ArticleCard>

                            ) }

                            rightComponent={ (

                                <ArticleCard image={testimage2}
                                             title="How do I create my application?"
                                             text_content="What if you ask for my help? I created applications for: IBM, Intel Corporation, the Olympus satellite project,

                                                major telecommunication and energy companies, industrial plants, Virtual ISPs, banks and credit card companies.

                                                Sure, keep in mind that the age of the requirements sculpted in stone has long gone.">

                                </ArticleCard>

                            ) }
                        />

                        <CardActions>
                            <Button size="small">More articles</Button>
                        </CardActions>

                    </Card>

                </FrontGridPane>



            </React.Fragment>

        );
    }
}

//export default HomeScreen;

// export default withWidth()(HomeScreen);


export default injector.connect(HomeScreen, {
    toRender: ['ArticleService']
});
