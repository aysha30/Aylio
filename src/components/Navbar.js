import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Paper,
    Grid,
    Typography} from '@material-ui/core';
import Particles from 'react-particles-js';
import aysha from './images/aysha.png';
import Typewriter from 'typewriter-effect';
import Wave from 'react-wavify';



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
        height: "700px",
        
    },
    particles: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    imgCont: {
        height:552,
        paddingTop: 150
    },
    typewriter: {
        color:"#fff"
    }
}));
export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <Paper square className={classes.root} >
            <Particles className={classes.particles} params={particleOptions} />
            <Grid container direction="column" justify="space-between" alignItems="stretch">
                <Grid item container direction="column" alignItems="center" className={classes.imgCont}>
                    <Grid item>
                        <img src={aysha} alt="name" />
                    </Grid>
                    <Grid item>
                    <Typography className={classes.typewriter} variant="h3">
                        <Typewriter
                        options={{
                            strings: ["The Software Engineer you're looking for..."],
                            autoStart: true,
                            loop: true,
                            changeDelay: "50",
                        }}
                        />
                    </Typography>
                    </Grid>
                    
                </Grid>
                <Grid item>
                <Wave 
					fill="#fff"
					paused={false}
					options={{
					height: 20,
					amplitude: 15,
					speed: 0.35,
					points: 8
					}}
				/></Grid>
                
                
            </Grid>
            
                
        </Paper>
        
        </div>
    );
}

