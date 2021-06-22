import React from 'react';
import { 
    Button,
    Grid,
    Box,
    useMediaQuery,
    Typography,
    Tooltip,
    Link} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';
// import Slide from 'react-reveal/Slide';
import girl from './girl.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';

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
            padding: "50px 150px 100px 150px",
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
                            "Hello friends, Welcome to my Aylio. This is Aysha Yazdani here, from Maharashtra, 
                            I am currently in my 3rd year of
                            B.Tech in Computer Science and Engineering at 
                            Jalpaiguri Government Engineering College, Jalpaiguri.
                            I’m skilled with MERN stack, and I have  experience in 
                            building interactive and user-centered website. 
                            Currently I'm working
                            in Web Driver company as a web developer in React team."
                            
                            </Typography>
                        </Grid>
                        <Grid item>
                        <Link href="https://github.com/aysha30" target="_blank" rel="noopener" >
                            <GitHubIcon fontSize="large"  />
                        </Link>
                        <Link href="https://www.linkedin.com/in/aysha-yazdani/" target="_blank" rel="noopener" >
                            <LinkedInIcon fontSize="large" />
                        </Link>
                        <Link href="https://www.instagram.com/a.y.s.ha_ikh/" target="_blank" rel="noopener" >
                            <InstagramIcon fontSize="large"/>
                        </Link>
                        <Link href="https://www.facebook.com/riyu.yazdani" target="_blank" rel="noopener" >
                            <FacebookIcon fontSize="large"/>
                        </Link>
                        
                        <Tooltip title="ettashamriya@gmail.com" placement="right">
                            <Link href="mailto:ettashamriya@gmail.com" target="_blank" rel="noopener" alt="ettashamriya@gmail.com">
                            <MailOutlineIcon fontSize="large"/>
                        </Link>
                        </Tooltip>
                        </Grid>
                            
                        <Grid item>
                            <Button variant="contained" component={Link} target="_blank" rel="noopener"
                            href="https://drive.google.com/file/d/1acvgR6fLYzW9UiZ7W9ltqOqRNtDXCNqf/view?usp=sharing"
                            underline="none"  color="secondary"
                            style={{padding: "10px", width: "200px",}}>
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
