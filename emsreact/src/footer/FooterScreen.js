import React, { Component } from 'react';

// Material UI components
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";

// From components library
import FrontGridPane from '../components_library/panes/FrontGridPane';
import ColouredCard from '../components_library/cards/ColouredCard';
import SeparatorPane from '../components_library/panes/SeparatorPane';
import BottomGridPane from "../components_library/panes/BottomGridPane";

// Screen implementing the form used to send messages
import PickMyBrainScreen from "../pick_my_brain/PickMyBrainScreen";

// Social networks links
import SocialScreen from "../social/SocialScreen";

/**
 * This is the footer screen.
 *
 * It includes:
 * * The Pick My Brain form to send messages
 * * The social network links
 * * Bottom name and link to privacy policy
 */
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

                            <BottomGridPane
                                leftComponent={ (

                                        <React.Fragment>

                                            <Typography variant="title" >

                                                Emanuele Santanché

                                            </Typography>

                                            <Typography variant="subheading" >

                                                Paris, France and, remotely, worldwide

                                            </Typography>

                                        </React.Fragment>

                                    ) }
                                rightComponent={ (

                                    <ButtonBase href="/article/58/privacy-policy">
                                        <Typography variant="title" >

                                            Privacy policy

                                        </Typography>
                                    </ButtonBase>

                                ) }
                            />

                        </CardContent>

                    </ColouredCard>

                </FrontGridPane>

            </React.Fragment>

        )
    }

}

export default FooterScreen;


