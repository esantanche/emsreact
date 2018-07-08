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
import Button from '@material-ui/core/Button';
import Toc from '@material-ui/icons/Toc';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

        //const { value } = this.state;

        return (

            <React.Fragment>

                <Grid container spacing={16}>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                    <Grid item xs={12} md={10} lg={8}>

                        <Card>

                            <Grid container spacing={0}>

                                <Grid item xs={12} md={6} lg={6} >
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

                                        <Grid container spacing={0} style={{ height: "200px" }}>
                                            {/*<Grid item xs={4}>*/}
                                                {/*<CardMedia*/}
                                                    {/*style={{ height: "200px",*/}
                                                        {/*//paddingTop: '100%',*/}
                                                    {/*width: "200px" }}*/}
                                                    {/*image={testimage}*/}
                                                    {/*title="this is the image"*/}
                                                {/*/>*/}

                                            {/*</Grid>*/}
                                            <Grid item xs={12} style={{ overflowY: "hidden" }}>

                                                <CardMedia
                                                    style={{ height: "200px",
                                                        //paddingTop: '100%',
                                                        width: "200px", display: "inline-block", verticalAlign: "top" }}
                                                    image={testimage}
                                                    title="this is the image"
                                                />
                                                <Typography component="div" style={{ display: "inline-block", width: "calc(100% - 250px)", overflowY: "hidden" }}>

                                                    text
                                                    It’s not about money only. When we create something, we would like it not to go down the sink too quickly. Sure nothing lasts forever, but if what we create shows to be useful for as long as it can, all the better.

                                                    How to do this when technologies crop up as quickly as mushrooms after a rain storm and disappear as quickly?

                                                    Software development is about problem solving. It isn’t ab widthout technologies.

                                                    When you write a piece of software, you are describing a way to solve a problem.

                                                    (...)

                                                </Typography>

                                            </Grid>



                                        </Grid>

                                        {/*image="6747806-xsmall.jpg"*/}

                                        {/*style={{ height: 0,*/}
                                        {/*paddingTop: '56.25%' }}*/}



                                        <CardContent>
                                            <Typography component="p">
                                                This impressive paella is a perfect party dish and a fun meal to cook together with
                                                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                            </Typography>
                                        </CardContent>

                                        <CardActions>
                                            <IconButton aria-label="Add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="Share">
                                                <ShareIcon />
                                            </IconButton>
                                            <IconButton
                                                // className={classnames(classes.expand, {
                                                //     [classes.expandOpen]: this.state.expanded,
                                                // })}
                                                // onClick={this.handleExpandClick}

                                            >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </CardActions>

                                        {/*<Typography variant="headline" component="h3">*/}
                                        {/*this text is inside the card*/}
                                        {/*</Typography>*/}



                                        {/*<Paper elevation={3}>*/}
                                        {/*<Typography variant="headline" component="h3">*/}
                                        {/*orem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper gravida lectus eu posuere. In turpis enim, aliquam*/}
                                        {/*sed gravida feugiat, facilisis in metus. Quisque non elit tristique, congue nulla ac, venenatis sapien.*/}
                                        {/*Sed dolor dolor, elementum ut vehicula iaculis, egestas ut ipsum. Suspendisse sed fringilla enim, id vulputate purus.*/}
                                        {/*Fusce porttitor, mauris vel dictum faucibus, orci mi accumsan nulla, ut porta felis risus a nibh.*/}
                                        {/*Sed pulvinar erat augue. Vestibulum sed nibh ac magna rutrum interdum.*/}
                                        {/*</Typography>*/}
                                        {/*</Paper>*/}

                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6} lg={6} >
                                    <Paper elevation={3}>
                                        <Typography variant="headline" component="h3">
                                            Right side
                                        </Typography>
                                    </Paper>
                                </Grid>

                            </Grid>

                        </Card>
                    </Grid>

                    <Hidden smDown>
                        <Grid item md={1} lg={2} >

                        </Grid>
                    </Hidden>

                </Grid>

                {/*<Grid container spacing={16}>*/}
                    {/*<Grid item xs={12}>*/}

                        {/*<Button variant="contained" color="primary">*/}
                            {/*Primary*/}
                        {/*</Button>*/}
                        {/*<Button variant="contained" color="secondary">*/}
                            {/*Secondary*/}
                        {/*</Button>*/}

                    {/*</Grid>*/}

                {/*</Grid>*/}

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

                <Toc/>
            </React.Fragment>

        );
    }
}

export default HomeScreen;
