import React from 'react';
import { Paper,
    CardContent,
    Grid,
    Box,
    useMediaQuery,
    Typography,} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';
import face from './images/facereg.JPG';
import quizz from './images/quizz.JPG';
import aynstagram from './images/aynstagram.png';
import oxm from './images/oxm.png';

const useStyle = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        
    },
    imgGridAbtMe: {
        width: "40%",
    },
    contentAbtMe:{
        height: "100%",
        [theme.breakpoints.down(1200)]:{
            padding:"50px"
        },
        [theme.breakpoints.up(1201)]:{
            padding: "100px 150px 0px 150px",
        },
    },
    paper:{
        width: "400px",
    },
    box:{
        border: "5px",
    }
}));

export default function Project() {
    const classes = useStyle();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down(1000));
    
    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Typography variant={matches ? "h1" : "h3"} color="secondary">
                        <Fade right>
                            <Box fontWeight="fontWeightBold">
                                Projects
                            </Box>
                        </Fade>
                    </Typography>
                </Grid>
                <Grid component={Box} item container direction="row" justify="space-evenly"
                className={classes.contentAbtMe} spacing={3}
                >
                    <Grid item className={classes.paper}>
                        <Fade bottom big>
                        <Paper component={Box} border={4} borderRadius={10} borderColor="primary.main" p={1} >
                            
                                <Box align="center">
                                    <img src={aynstagram} width="100%" alt={aynstagram} />
                                </Box>
                                
                                <CardContent>
                                    <Typography align="center" variant={matches ? "h4" : 'h6'}>
                                        <Box fontWeight="fontWeightBold">
                                            Aynstagram
                                        </Box>
                                        <Box fontWeight="fontWeightSmall">
                                        The App is called "Aynstagram" and it is a simple social media app that allows users to post interesting events that happened in their lives.
                                        <br/>Tool: ReactJS, NodeJS, MongoDB, ExpressJS, Material UI <br/>
                                        <a href="https://github.com/aysha30/Aynstagram" target="_blank" rel="noreferrer">Github</a>&nbsp;
                                        <a href="https://aynstagram.netlify.app/" target="_blank" rel="noreferrer">Url</a>
                                        </Box>
                                    </Typography>
                                    
                                </CardContent>
                            
                        </Paper>
                        </Fade>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <Fade bottom big>
                        <Paper component={Box} border={4} borderRadius={10} borderColor="primary.main" p={1} >
                            
                                <Box align="center">
                                    <img src={oxm} width="100%" alt={oxm} />
                                </Box>
                                
                                <CardContent>
                                    <Typography align="center" variant={matches ? "h4" : 'h6'}>
                                        <Box fontWeight="fontWeightBold">
                                            Oxus Motors
                                        </Box>
                                        <Box fontWeight="fontWeightSmall">
                                        A car inventory website.
                                        <br/>Tool: ReactJS, NodeJS, MongoDB, ExpressJS, Material UI <br/>
                                        <a href="https://github.com/aysha30/Oxus_Motor" target="_blank" rel="noreferrer">Github</a>&nbsp;
                                        <a href="https://oxusmotors.herokuapp.com/" target="_blank" rel="noreferrer">Url</a>
                                        </Box>
                                    </Typography>
                                    
                                </CardContent>
                            
                        </Paper>
                        </Fade>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <Fade bottom big>
                        <Paper component={Box} border={4} borderRadius={10} borderColor="primary.main" p={1} >
                            
                                <Box align="center">
                                    <img src={face} width="100%" alt={face} />
                                </Box>
                                
                                <CardContent>
                                    <Typography align="center" variant={matches ? "h4" : 'h6'}>
                                        <Box fontWeight="fontWeightBold">
                                            FaceReg
                                        </Box>
                                        <Box fontWeight="fontWeightSmall">
                                        Here I created a face detecting web app, which detects the face from given image url.<br/>
                                        Tool: ReactJS, NodeJS, PostgreSQL, Clarifai API <br/>
                                        <a href="https://github.com/aysha30/FaceRegApp-frontend" target="_blank" rel="noreferrer">Frontend</a>&nbsp;
                                        <a href="https://github.com/aysha30/FaceRegApp-backend" target="_blank" rel="noreferrer">Backend</a>&nbsp;
                                        <a href="https://face-reg-app.herokuapp.com/" target="_blank" rel="noreferrer">Url</a>
                                        </Box>
                                    </Typography>
                                    
                                </CardContent>
                            
                        </Paper>
                        </Fade>
                    </Grid>
                    <Grid item className={classes.paper}>
                            <Fade bottom big>
                            <Paper component={Box} border={4} borderRadius={10} borderColor="primary.main" p={1} >
                                
                                    <Box align="center">
                                        <img src={quizz} width="340px" alt={quizz} />
                                    </Box>
                                    
                                    <CardContent>
                                        <Typography align="center" variant={matches ? "h4" : 'h6'}>
                                            <Box fontWeight="fontWeightBold">
                                                QuizzApp
                                            </Box>
                                            <Box fontWeight="fontWeightSmall">
                                            Tool: ReactJs, Trivia API <br/>
                                            <a href="https://github.com/aysha30/Quizz-app" target="_blank" rel="noreferrer">Github</a>&nbsp;
                                            <a href="https://aysha30.github.io/Quizz-app/" target="_blank" rel="noreferrer">Url</a>
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

