import React from 'react';
import { 
    Grid,
    Box,
    useMediaQuery,
    Typography,} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';

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
            padding: "100px 150px 100px 150px",
        },
    },
    paraAbtMe:{
        width: "60%"
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
                <Grid item container>
                    
                </Grid>
                
            </Grid>
        </div>
    )
}

