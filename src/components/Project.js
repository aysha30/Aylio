import React from 'react';
import { Paper,
    CardContent,
    Grid,
    Box,
    useMediaQuery,
    Typography,} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';
import face from './facereg.JPG';
import quizz from './quizz.JPG';

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
                        <Fade right big>
                            <Box fontWeight="fontWeightBold">
                                Projects
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
                                <Box  border={4} borderRadius={10} borderColor="primary.main" p={3} >
                                    <Box align="center">
                                        <img src={face} width="340px" alt={face} />
                                    </Box>
                                    
                                    <CardContent>
                                        <Typography align="center" variant={matches ? "h4" : 'h6'}>
                                            <Box fontWeight="fontWeightBold">
                                                FaceReg
                                            </Box>
                                            <Box fontWeight="fontWeightSmall">
                                            Here I created a face detecting web app, which detects the face from given image url.<br/>
                                            Tool: ReactJS, NodeJS, PostgreSQL, Clarifai API <br/>
                                            Github repo: <a href="https://github.com/aysha30/FaceRegApp-frontend" target="_blank">(frontEnd)</a>
                                            <a href="https://github.com/aysha30/FaceRegApp-backend" target="_blank">(backEnd)</a>
                                            <br/>Url: <a href="https://face-reg-app.herokuapp.com/" target="_blank">FaceRegApp</a>

                                            </Box>
                                        </Typography>
                                        
                                    </CardContent>
                                </Box>
                                
                            </Paper>
                            </Fade>
                        </Grid>
                        <Grid item className={classes.paper}>
                            <Fade bottom big>
                            <Paper >
                                <Box  border={4} borderRadius={10} borderColor="primary.main" p={3} >
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
                                            GitHub repo: <a href="https://github.com/aysha30/Quizz-app" target="_blank">QuizzApp code</a>
                                            <br/>Url: <a href="https://aysha30.github.io/Quizz-app/" target="_blank">QuizzApp</a>
                                            </Box>
                                        </Typography>
                                        
                                    </CardContent>
                                </Box>
                                
                            </Paper>
                            </Fade>
                        </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

