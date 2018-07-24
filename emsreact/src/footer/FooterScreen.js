import React, { Component } from 'react';

// Material UI components
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import withWidth from "@material-ui/core/withWidth/index";
import {withStyles} from "@material-ui/core/styles/index";
import FrontGridPane from '../components_library/panes/FrontGridPane';
import ColouredCard from '../components_library/cards/ColouredCard';
import SeparatorPane from '../components_library/panes/SeparatorPane';
import PickMyBrainScreen from "../pick_my_brain/PickMyBrainScreen";
import CardHeader from "@material-ui/core/es/CardHeader/CardHeader";

// FIXME this is how you get node in different language, it works! GET http://backend.emanuelesantanche.com/fr/node/26?_format=json

class FooterScreen extends Component {

    render() {

        const { width } = this.props;

        return (

            <React.Fragment>

                <FrontGridPane>

                    {/*FIXME it may be better to make a separate component for the contact me form*/}

                    <ColouredCard light={true}>

                        <CardHeader title="Pick My Brain!"
                                    subheader="Or just ask me a question" />

                        <CardContent>

                            <PickMyBrainScreen />

                        </CardContent>

                    </ColouredCard>

                    <SeparatorPane />

                    <ColouredCard>

                        <CardContent>

                            <Typography variant="title" >

                                small print

                            </Typography>

                        </CardContent>

                    </ColouredCard>

                </FrontGridPane>

            </React.Fragment>

        )
    }

}

// FIXME no styles here, move them to component library
// withWidth shouldn't be used as well

export default withWidth()(FooterScreen);


