import React from 'react';
import { 
    Grid,
    Box,
    useMediaQuery,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Typography,} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SchoolIcon from '@material-ui/icons/School';
import Fade from 'react-reveal/Fade';
import edu from './edu.png';

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
            padding: "50px 150px 0px 150px",
        },
    },
    paraAbtMe:{
        width: "60%"
    },
    inline: {
        display: 'inline',
    },
}));

export default function Education() {
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
                                Education
                            </Box>
                        </Fade>
                    </Typography>
                </Grid>
                <Grid item container direction="row" className={classes.contentAbtMe} >
                    <Grid item container direction="column" 
                    alignItems="center" className={classes.paraAbtMe}>
                        
                        <Grid item>
                            {/* <Typography variant={matches ? "h4" : 'h6'} paragraph> */}
                            
                        
                                <List>
                                    <Fade bottom delay={200} big>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <SchoolIcon />
                                            </ListItemAvatar>
                                            <ListItemText primary={
                                                    <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant={matches ? "h4" : 'h6'}
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Bachelor of Technology in CSE
                                                    </Typography>
                                                    </React.Fragment>
                                                } 
                                                secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant={matches ? "h4" : 'h6'}
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Jalpaiguri Goverment Engineering College, Jalpaiguri <br/>
                                                    2018-22,   CGPA - 9.0
                                                </Typography>
                                                </React.Fragment>
                                            } />
                                        </ListItem>
                                    </Fade>
                                    <Fade bottom delay={400} big>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <SchoolIcon />
                                            </ListItemAvatar>
                                            <ListItemText primary={
                                                    <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant={matches ? "h4" : 'h6'}
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Higher Secondary (AMUB)
                                                    </Typography>
                                                    </React.Fragment>
                                                } secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant={matches ? "h4" : 'h6'}
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    SSSG, Aligarh Muslim University, Aligarh <br/>
                                                    2015-17
                                                </Typography>
                                                </React.Fragment>
                                            } />
                                        </ListItem>
                                    </Fade>
                                    <Fade bottom delay={600} big>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <SchoolIcon />
                                            </ListItemAvatar>
                                            <ListItemText primary={
                                                    <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant={matches ? "h4" : 'h6'}
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        Senior Secondary (CBSE)
                                                    </Typography>
                                                    </React.Fragment>
                                                } secondary={
                                                <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant={matches ? "h4" : 'h6'}
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    Kendriya Vodyalaya NAD Karanja, Navi Mumbai <br/>
                                                    2015
                                                </Typography>
                                                </React.Fragment>
                                            } />
                                        </ListItem>
                                    </Fade>
                                    
                                </List>
                            {/* </Typography> */}
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="center" className={classes.imgGridAbtMe}>
                        <Fade left big>
                            <Box >
                                <img src={edu} width="100%" alt="gitl" />
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

