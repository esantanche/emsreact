import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Home from './home/Home';
import theme from './MuiTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import BodyPane from './components_library/panes/BodyPane';

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
                        <Route exact path="/" component={Home} />
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
