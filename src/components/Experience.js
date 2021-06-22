import React from 'react';
import { 
    Grid,
    Box,
    CardContent,
    useMediaQuery,
    Paper,
    Typography,} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';
import uoodma from './Uoodma.png';
import tsf from './tsf.png';

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        
    },
    imgGridAbtMe: {
        width: "40%",
    },
    contentAbtMe:{
        height: "auto",
        [theme.breakpoints.down(1200)]:{
            padding:"50px"
        },
        [theme.breakpoints.up(1201)]:{
            padding: "100px 150px 100px 150px",
        },
        display: "flex"
    },
    paper:{
        width: "400px",
    },
    box:{
        border: "5px",
    }
}));

export default function Experience() {
    const classes = useStyle();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(1000));
    
    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Typography variant={matches ? "h1" : "h3"} color="primary">
                        <Fade left big>
                            <Box fontWeight="fontWeightBold">
                                Experience
                            </Box>
                        </Fade>
                    </Typography>
                </Grid>
                <Grid component={Box} item container direction="row" justify="space-evenly"
                className={classes.contentAbtMe}
                >
                    <Grid item className={classes.paper}>
                            <Fade bottom big>
                            <Paper >
                                <Box  border={4} borderRadius={10} borderColor="secondary.main" p={3} >
                                    <Box align="center">
                                        <img src={uoodma} alt={uoodma} />
                                    </Box>
                                    
                                    <CardContent>
                                        <Typography align="center" variant={matches ? "h4" : 'h6'}>
                                            <Box fontWeight="fontWeightBold">
                                                Uoodmaish LLP
                                            </Box>
                                            <Box fontWeight="fontWeightMedium">
                                                Web Developer <br/> (May, 2021 - Present)
                                            </Box>
                                            <Box fontWeight="fontWeightSmall">
                                            Applying suitable algorithms to design a desired model for the given
                                            datasets. Using Scikit-Learn library in machine learning to design
                                            classification and regression models.
                                            </Box>
                                        </Typography>
                                        
                                    </CardContent>
                                </Box>
                                
                            </Paper>
                            </Fade>
                        </Grid>
                        <Grid item  className={classes.paper}>
                        <Fade bottom big>
                            <Paper component={Box} border={4} borderRadius={10} borderColor="secondary.main" p={3}>
                                <Box align="center">
                                <img src={tsf} alt={tsf} />
                                </Box>
                                <CardContent>
                                    <Typography align="center" variant={matches ? "h4" : 'h6'}>
                                        <Box fontWeight="fontWeightBold">
                                            The Sparks Foundation
                                        </Box>
                                        <Box fontWeight="fontWeightMedium">
                                            Data Science Intern 
                                            <br/>(Nov, 2020 - Dec, 2020)
                                        </Box>
                                        <Box fontWeight="fontWeightSmall">
                                            Worked as a Web Developer at WebDriver, it's child Company.
                                            Helped in website development with other team members.
                                        </Box>
                                    </Typography>
                                    
                                </CardContent>
                            </Paper>
                            </Fade>
                        </Grid>
                    
                </Grid>
                
            </Grid>
        </div>
    )
}

