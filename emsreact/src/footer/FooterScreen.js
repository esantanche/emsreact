import React, { Component } from 'react';

// Material UI components
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FrontGridPane from '../components_library/panes/FrontGridPane';
import ColouredCard from '../components_library/cards/ColouredCard';
import SeparatorPane from '../components_library/panes/SeparatorPane';
import PickMyBrainScreen from "../pick_my_brain/PickMyBrainScreen";
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";
import SocialScreen from "../social/SocialScreen";
import Grid from "@material-ui/core/Grid/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";

class FooterScreen extends Component {

    render() {

        return (

            <React.Fragment>

                <FrontGridPane>

                    <ColouredCard light={true}>

                        <CardHeader title="Pick My Brain!"
                                    subheader="Or just ask me a question" />

                        <CardContent>

                            <PickMyBrainScreen />

                        </CardContent>

                    </ColouredCard>

                    <SeparatorPane />

                    <SocialScreen/>

                    <SeparatorPane />

                    <ColouredCard>

                        <CardContent>

                            <Grid container spacing={8} style={{ display: "flex", alignItems: "flex-start" }}>

                                <Grid item xs={9}>

                                    <Typography variant="title" >

                                        Emanuele Santanché

                                    </Typography>

                                    <Typography variant="subheading" >

                                        Paris, France and, remotely, worldwide

                                    </Typography>

                                </Grid>

                                <Grid item xs={3} style={{ alignSelf: "flex-end" }}>

                                    <ButtonBase href="/article/58/privacy-policy">
                                        <Typography variant="title" >

                                            Privacy policy

                                        </Typography>
                                    </ButtonBase>

                                </Grid>

                            </Grid>

                        </CardContent>

                    </ColouredCard>

                </FrontGridPane>

            </React.Fragment>

        )
    }

}

export default FooterScreen;


