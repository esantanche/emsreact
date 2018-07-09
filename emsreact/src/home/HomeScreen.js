import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import testimage from '../images/6747806-xsmall.jpg';
import testimage2 from '../images/6484991-xsmall.jpg';
import Button from '@material-ui/core/Button';
import Toc from '@material-ui/icons/Toc';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Dotdotdot from 'react-dotdotdot';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import FrontGridPane from '../components_library/panes/FrontGridPane';
import InnerGridPane from '../components_library/panes/InnerGridPane';

// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// FIXME TODO  https://react-styleguidist.js.org/docs/documenting.html
class HomeScreen extends Component {

    // state = {
    //     value: 0,
    // };

    // handleChange = (event, value) => {
    //     this.setState({ value });
    // };

    // There are some FontIcon elements that have style={{ width: "20px" }} added. It's because the icon
    // is defective and doesn't have proper width.
    render() {

        const { width } = this.props;

        return (

            <React.Fragment>

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

                                <Card>

                                    <CardHeader title="How do I protect my investment in bespoke software?"
                                                style={{ height: "6em" }}>

                                    </CardHeader>

                                    <CardContent>

                                        {/*style={{ height: "200px" }}*/}

                                        <Grid container spacing={0} style={{ display: "flex", flexDirection: "row", alignItems: "stretch"
                                        }}>


                                            { width === "xs" ? (

                                                    <React.Fragment>

                                                        <Grid item xs={12}>

                                                            <CardMedia
                                                                // style={{ height: "200px", width: "200px" }}
                                                                style={{ height: "0",
                                                                    paddingTop: '100%',
                                                                }}
                                                                image={testimage}
                                                                title="this is the image"
                                                            />

                                                        </Grid>

                                                        <Grid item xs={12}>

                                                            <Typography variant="body2" component="p"
                                                                        style={{ flex: "1",  marginLeft: "10px", marginTop: "10px"}}>


                                                                It’s not about money only. When we create something, we would like it not to go down the sink too quickly.

                                                                Sure nothing lasts forever, but if what we create shows to be useful for as long as it can, all the better.

                                                                How to do this when technologies crop up as quickly as mushrooms after a rain storm and disappear as quickly?

                                                                Software development is about problem solving. It isn’t about technologies.

                                                                When you write a piece of software, you are describing a way to solve a problem.


                                                            </Typography>

                                                        </Grid>

                                                    </React.Fragment>

                                                )

                                                :

                                                (

                                                    <React.Fragment>

                                                        <CardMedia
                                                            style={{ height: "200px", width: "200px" }}
                                                            // style={{ height: "200px",
                                                            //     //paddingTop: '100%',
                                                            // width: "200px" }}
                                                            image={testimage}
                                                            title="this is the image"
                                                        />

                                                        <Typography variant="body2" component="p"
                                                                    style={{ flex: "1", height: "200px", marginLeft: "10px" }}>

                                                            <Dotdotdot clamp="200px" style={{ height: "200px" }}>

                                                                It’s not about money only. When we create something, we would like it not to go down the sink too quickly.

                                                                Sure nothing lasts forever, but if what we create shows to be useful for as long as it can, all the better.

                                                                How to do this when technologies crop up as quickly as mushrooms after a rain storm and disappear as quickly?

                                                                Software development is about problem solving. It isn’t about technologies.

                                                                When you write a piece of software, you are describing a way to solve a problem.

                                                            </Dotdotdot>

                                                        </Typography>

                                                    </React.Fragment>

                                                )
                                            }

                                        </Grid>

                                    </CardContent>


                                    <CardActions>
                                        {/*<Button size="small" color="primary">*/}
                                        {/*Learn More*/}
                                        {/*</Button>*/}
                                        <IconButton style={{ marginLeft: "auto" }}>
                                            <MoreHoriz/>
                                        </IconButton>
                                    </CardActions>


                                </Card>

                            ) }

                            rightComponent={ (

                                <Card>

                                    <CardHeader title="How do I create my application?"
                                                style={{ height: "6em" }}>

                                    </CardHeader>

                                    <CardContent>

                                        {/*style={{ height: "200px" }}*/}

                                        <Grid container spacing={0} style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}>
                                            <CardMedia
                                                style={{ height: "200px", width: "200px" }}
                                                // style={{ height: "200px",
                                                //     //paddingTop: '100%',
                                                // width: "200px" }}
                                                image={testimage2}
                                                title="this is the image"
                                            />

                                            <Typography variant="body2" component="p"
                                                        style={{ flex: "1", height: "200px", marginLeft: "10px"
                                                        }}
                                            >
                                                <Dotdotdot clamp="200px" style={{ height: "200px" }}>

                                                    What if you ask for my help? I created applications for: IBM, Intel Corporation, the Olympus satellite project,

                                                    major telecommunication and energy companies, industrial plants, Virtual ISPs, banks and credit card companies.

                                                    Sure, keep in mind that the age of the requirements sculpted in stone has long gone.

                                                </Dotdotdot>

                                            </Typography>

                                        </Grid>

                                    </CardContent>

                                    <CardActions>

                                        <IconButton style={{ marginLeft: "auto" }}>
                                            <MoreHoriz/>
                                        </IconButton>

                                    </CardActions>

                                </Card>

                            ) }
                        />

                    </Card>

                </FrontGridPane>

            </React.Fragment>

        );
    }
}

//export default HomeScreen;

export default withWidth()(HomeScreen);

