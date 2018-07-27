import React, { Component } from 'react';

// React Router
import { BrowserRouter, Route } from 'react-router-dom';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';

// Material UI themes
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

//
// import ScrollableAnchor from 'react-scrollable-anchor';


// We need to register services here for the entire application to use them
// Services are declared in services.js
import {injector} from 'react-services-injector';
import services from './services';
injector.register(services);

class App extends Component {

    render() {

        // Using BrowserRouter because this isn't a static website.
        // For static websites use HashRouter

        // CssBaseline is like normalize.css. It normalizes differences between browsers

        return (
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
        );
    }
}

export default App;
