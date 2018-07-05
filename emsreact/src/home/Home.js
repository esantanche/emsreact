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

// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

// FIXME TODO  https://react-styleguidist.js.org/docs/documenting.html
class Home extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    // There are some FontIcon elements that have style={{ width: "20px" }} added. It's because the icon
    // is defective and doesn't have proper width.
    render() {

        const { value } = this.state;

        return (

            <React.Fragment>

                <Grid container spacing={16}>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                    <Grid item xs={12} md={5} lg={4} >
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

                            {/*image="6747806-xsmall.jpg"*/}

                            {/*style={{ height: 0,*/}
                            {/*paddingTop: '56.25%' }}*/}

                            <CardMedia
                                style={{ height: 0,
                                          paddingTop: '56.25%' }}
                                image={testimage}
                                title="this is the image"
                            />

                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>

                            {/*<Typography variant="headline" component="h3">*/}
                                {/*this text is inside the card*/}
                            {/*</Typography>*/}

                        </Card>

                        {/*<Paper elevation={3}>*/}
                            {/*<Typography variant="headline" component="h3">*/}
                                {/*orem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper gravida lectus eu posuere. In turpis enim, aliquam*/}
                                {/*sed gravida feugiat, facilisis in metus. Quisque non elit tristique, congue nulla ac, venenatis sapien.*/}
                                {/*Sed dolor dolor, elementum ut vehicula iaculis, egestas ut ipsum. Suspendisse sed fringilla enim, id vulputate purus.*/}
                                {/*Fusce porttitor, mauris vel dictum faucibus, orci mi accumsan nulla, ut porta felis risus a nibh.*/}
                                {/*Sed pulvinar erat augue. Vestibulum sed nibh ac magna rutrum interdum.*/}
                            {/*</Typography>*/}
                        {/*</Paper>*/}
                    </Grid>

                    <Grid item xs={12} md={5} lg={4} >
                        <Paper elevation={3}>
                            <Typography variant="headline" component="h3">
                                Right side
                            </Typography>
                        </Paper>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                </Grid>

                {/*<BottomNavigation*/}
                    {/*value={value}*/}
                    {/*onChange={this.handleChange}*/}
                    {/*showLabels*/}
                    {/*style={{ width: 500 }}*/}
                {/*>*/}
                    {/*<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />*/}
                    {/*<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />*/}
                    {/*<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />*/}
                {/*</BottomNavigation>*/}

            </React.Fragment>

        );
    }
}

export default Home;
