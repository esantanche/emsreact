import React, { Component } from 'react';

import Grid from "@material-ui/core/es/Grid/Grid";

import GitHub_logo from '../images/GitHub_Logo.png';
import LinkedIn_logo from '../images/LinkedIn_logo.png';
import Medium_logo from '../images/Medium_logo.png';
import StackOverflow_logo from '../images/StackOverflow_logo.png';

import SocialCard from "../components_library/cards/SocialCard";


class SocialScreen extends Component {

    render() {

        return (

            <React.Fragment>

                <Grid container spacing={16}>

                    <Grid item xs={6} sm={3} md={3} lg={3} >
                        <SocialCard logo={GitHub_logo} url_to_go="https://github.com/esantanche"/>
                    </Grid>

                    <Grid item xs={6} sm={3} md={3} lg={3} >
                        <SocialCard logo={Medium_logo} url_to_go="https://medium.com/@esantanche"/>
                    </Grid>

                    <Grid item xs={6} sm={3} md={3} lg={3} >
                        <SocialCard logo={LinkedIn_logo} url_to_go="https://www.linkedin.com/in/emanuelesantanche/"/>
                    </Grid>

                    <Grid item xs={6} sm={3} md={3} lg={3} >
                        <SocialCard logo={StackOverflow_logo} url_to_go="https://stackoverflow.com/users/6171615/emanuele-santanche"/>
                    </Grid>

                </Grid>

            </React.Fragment>

        )

    }

}

export default SocialScreen;
