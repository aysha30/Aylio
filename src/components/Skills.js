import React from 'react';
import { 
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Box,
    useMediaQuery,
    Typography,} from '@material-ui/core';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import html5 from './images/skill-logo/html.png';
import arduino from './images/skill-logo/arduino.png';
import bootstrap from './images/skill-logo/bootstrap.png';
import cpp from './images/skill-logo/c++.png';
import css3 from './images/skill-logo/css.png';
import django from './images/skill-logo/django.png';
import flask from './images/skill-logo/flask.png';
import java from './images/skill-logo/java.png';
import javascript from './images/skill-logo/javascript.png';
import ml from './images/skill-logo/machine-learning.png';
import mongodb from './images/skill-logo/mongodb.png';
import nodejs from './images/skill-logo/nodejs.png';
import postgresql from './images/skill-logo/postgresql.png';
import react from './images/skill-logo/react.png';
import python from './images/skill-logo/python.png';

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

    const width = '100%', height='200px';
    const Container = styled.div`
    ${'' /* border: 1px solid red; */}
    position: relative;
    overflow: hidden;
    width: ${width};
    height: ${height};
    `;
    const Arrow = styled.div`
    text-shadow: 1px 1px 1px #fff;
    z-index: 100;
    line-height: ${height};
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
    `;
    const CarouselUI = ({ position, handleClick, children }) => (
    <Container>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
    </Container>
    );
    const Carousel = makeCarousel(CarouselUI);


export default function Skills() {
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
                                Skills
                            </Box>
                        </Fade>
                    </Typography>
                </Grid>
                <Grid item container direction="row" className={classes.contentAbtMe} >
                    <Carousel>
                        <Slide right>
                            <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={cpp}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    C++
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={javascript}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    JavaScript
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                width="auto"
                                                image={python}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    Python 3
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={java}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    Java
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Slide>
                        <Slide right>
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={html5}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    Html5
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={css3}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    CSS3
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={react}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    ReactJS
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={nodejs}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    NodeJS
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Slide>
                        <Slide right>
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={bootstrap}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    Bootstrap
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={flask}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    Flask
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={django}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    Django
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={mongodb}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    MongoDB
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Slide>
                        <Slide right>
                        <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={postgresql}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    PostgreSQL
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={ml}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    Machine Learning
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia 
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={arduino}
                                            />
                                            <CardContent>
                                                <Typography align="center">
                                                    IoT (Arduino UNO)
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Slide>
                    </Carousel>
                </Grid>
            </Grid>
        </div>
    )
}

