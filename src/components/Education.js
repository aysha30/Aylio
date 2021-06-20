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
    }
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
                            
                        
                            
                        </Fade>
                    </Grid><Grid item className={classes.imgGridAbtMe}>
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

