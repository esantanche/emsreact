import React, { Component } from 'react';
import logo from './logo.svg';
// FIXME App.css will have to go
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Button from '@material-ui/core/Button';
import Index from './pages/index';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <CssBaseline />
            {/* The rest of your application */}
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <Index/>

        </React.Fragment>
    );
  }
}

export default App;
