import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Button from '@material-ui/core/Button';
import HomeScreen from './home/HomeScreen';
import ArticleScreen from './article/ArticleScreen';
import theme from './MuiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import BodyPane from './components_library/panes/BodyPane';
import HeaderScreen from './header/HeaderScreen';


import {injector} from 'react-services-injector'; // To use service, see services.js
import services from './services';                // To use service, see services.js

injector.register(services);


//
// // Background color for the entire body
// // Used in App.js
// .body-pane
// background-color: $body-background-color

// <MuiThemeProvider theme={theme}>
//     {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
// <CssBaseline />
// <Component {...props} />
// </MuiThemeProvider>


// const styles = theme => ({
//     root: {
//         backgroundColor: "#036899"
//     },
// });

class App extends Component {

    // static propTypes = {
    //     classes: PropTypes.object.isRequired
    // };

    render() {

        // const { classes } = this.props;

        return (
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <BodyPane>
                        <HeaderScreen />
                        <Route exact path="/" component={HomeScreen} />
                        <Route path="/article/" component={ArticleScreen} />

                        {/*<Button variant="contained" color="primary">*/}
                            {/*Hello World*/}
                        {/*</Button>*/}
                    </BodyPane>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

// FIXME maybe withStyles is no longer needed if here we don't use styles
// export default withStyles(styles)(App);

export default App;
