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

export default function Skills() {
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
                                Skills
                            </Box>
                        </Fade>
                    </Typography>
                </Grid>
                <Grid item container>
                    
                </Grid>
            </Grid>
        </div>
    )
}

