import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Paper,
    Grid,
    Typography,
    Container,} from '@material-ui/core';
import Particles from 'react-particles-js';
import aysha from './aysha.png';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Typewriter from 'typewriter-effect';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = {
    root: {
        position: 'relative',
        overflow: "hidden",
    },
    slide: {
        margin: "20% 10% 10%",
        // minHeight: 100,
        color: '#fff',
    },
    // slide1: {
    //     backgroundImage: {aysha},
    // },
    // slide2: {
    //     backgroundImage: {aysha},
    // },
    // slide3: {
    //     backgroundImage: {aysha},
    // },
};

const particleOptions = {
    particles: {
    number: {
        value: 100,
        density: {
        enable: true,
        value_area: 800
        }
    }
    }
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: "auto", 
        backgroundColor: theme.palette.primary.main,
        height: "800px"
    },
    particles: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
    },
    imgCont: {
        // position: 'absolute',
        zIndex: 0,
        // width: "100%"
    }
}));
export default function Navbar() {
    const classes = useStyles();

    return (
        <Paper square className={classes.root} >
            <Particles className={classes.particles} params={particleOptions} />
            <Container>
                <Grid className={classes.imgCont}>
                <Grid item>
                <AutoPlaySwipeableViews interval={12000}>
                    <div style={Object.assign({}, styles.slide)}>
                        <img src={aysha} alt="name" />
                        <Typography variant="h3">
                            <Typewriter
                            options={{
                                strings: ["The Software Engineer you're looking for..."],
                                autoStart: true,
                                loop: true,
                                changeDelay: "50",
                            }}
                            />
                        </Typography>
                        
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <img src={aysha} alt="name" />
                        <Typography variant="h3">
                            <Typewriter
                            options={{
                                strings: ["The Software Engineer you're looking for..."],
                                autoStart: true,
                                loop: true,
                                changeDelay: "50",
                            }}
                            />
                        </Typography>
                    </div>
                    <div style={Object.assign({}, styles.slide)}>
                        <img src={aysha} alt="name" />
                        <Typography variant="h3">
                            <Typewriter
                            options={{
                                strings: ["The Software Engineer you're looking for..."],
                                autoStart: true,
                                loop: true,
                                changeDelay: "50",
                            }}
                            />
                        </Typography>
                    </div>
                </AutoPlaySwipeableViews>
                </Grid>
                
                </Grid>
                
                {/* <div><img className={classes.img} src={aysha} alt="name" /></div> */}
            </Container>
        </Paper>
    );
}