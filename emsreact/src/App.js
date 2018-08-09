import React, { Component } from 'react';

// React Router
import { BrowserRouter, Route } from 'react-router-dom';

// Material UI normalization component
import CssBaseline from '@material-ui/core/CssBaseline';

// Material UI theme
import theme from './MuiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

// Screens used here
import HomeScreen from './home/HomeScreen';
import ArticleScreen from './article/ArticleScreen';
import TopicScreen from './list_of_articles/TopicScreen';
import HeaderScreen from './header/HeaderScreen';
import FooterScreen from './footer/FooterScreen';

// From components library
import BodyPane from './components_library/panes/BodyPane';

// FIXME!
import AppContext from './AppContext';

// FIXME clean again!!

import TopicService from "./services/topic/TopicService";
import ArticleService from "./services/article/ArticleService";
import PickMyBrainMessageService from "./services/pick_my_brain_message/PickMyBrainMessageService";

const AppTopicService = new TopicService();
const AppArticleService = new ArticleService();
const AppPickMyBrainMessageService = new PickMyBrainMessageService();

// FIXME!
const Services = { TopicService: AppTopicService,
                   ArticleService: AppArticleService,
                   PickMyBrainMessageService: AppPickMyBrainMessageService};

// FIXME uninstall react service injector

/**
 * This is the starting point for the application.
 * It's rendered in index.js.
 *
 * The component MuiThemeProvider makes the theme available to the entire application.
 *
 * CssBaseline normalises css for all browsers.
 *
 * BodyPane is a pane. You find it in the component library (src/components_library/panes).
 *
 * As you can see the header and the footer are always present.
 *
 * The exact path "/" is the home page.
 *
 * The route /article/:articlenid shows a single article. The route /articles/:topic shows
 * all articles related to the given topic.
 *
 */
class App extends Component {

    render() {

        // Using BrowserRouter because this isn't a static website.
        // For static websites use HashRouter

        // CssBaseline is like normalize.css. It normalizes differences between browsers

        return (
            <AppContext.Provider value={Services}>
                <BrowserRouter>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <BodyPane>

                            <HeaderScreen />

                            <Route exact path="/" component={HomeScreen} />
                            <Route path="/article/:articlenid" component={ArticleScreen} />
                            <Route path="/articles/:topic" component={TopicScreen} />

                            <FooterScreen />

                        </BodyPane>
                    </MuiThemeProvider>
                </BrowserRouter>
            </AppContext.Provider>
        );
    }
}

export default App;
