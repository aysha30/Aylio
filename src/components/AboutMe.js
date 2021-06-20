import React from 'react';
import { 
    Button,
    Grid,
    Box,
    useMediaQuery,
    Typography,} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';
import girl from './girl.jpg';

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        marginTop: "100px",
        zIndex: 1000,
    },
    contentAbtMe:{
        height: "100%",
        [theme.breakpoints.down(1200)]:{
            padding:"50px"
        },
        [theme.breakpoints.up(1201)]:{
            padding: "50px 150px 0px 150px",
        },
    },
    imgGridAbtMe: {
        width: "40%",
    },
    paraAbtMe:{
        width: "60%"
    }
}));

function AboutMe() {
    const classes = useStyle();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(1000));
    
    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Typography variant={matches ? "h1" : "h3"} color="secondary">
                        <Fade right big>
                            <Box fontWeight="fontWeightBold">
                                About Me
                            </Box>
                        </Fade>
                    </Typography>
                </Grid>
                <Grid item container direction="row" className={classes.contentAbtMe} >
                    <Grid item container alignItems="center" className={classes.imgGridAbtMe}>
                        <Fade left big>
                            <Box >
                                <img src={girl} width="100%" alt="gitl" />
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item container direction="column" justify="space-evenly"
                    alignItems="center" className={classes.paraAbtMe}>
                        <Fade bottom big>
                        <Grid item>
                            <Typography variant={matches ? "h4" : 'h6'} paragraph>
                                Officia labore ullamco do proident exercitation 
                                sunt eu qui reprehenderit dolore cupidatat 
                                mollit. Et deserunt est est ipsum sint reprehenderit 
                                aliquip laboris proident proident sit culpa 
                                incididunt. Dolore deserunt ipsum dolore aliqua 
                                adipisicing id irure exercitation excepteur id est. 
                                Adipisicing ex officia ipsum eu aute dolore id 
                                laboris mollit minim.
                            </Typography>
                        </Grid>
                            
                        <Grid item>
                            <Button variant="contained" 
                            style={{padding: "10px", width: "200px"}} color="secondary">
                            Resume
                            </Button>
                        </Grid>
                            
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutMe;
