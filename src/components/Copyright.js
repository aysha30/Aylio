import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root:{
		backgroundColor: theme.palette.secondary.main,
		// margin: 0,
	},
}))

function Copyright() {
	const classes = useStyles();
    return (
		<div className={classes.root}>
			<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/aysha30/Aylio">
				Aylio
			</Link> &nbsp;
			{new Date().getFullYear()}
			{'.'}<br/>{'Made by Aysha Yazdani with ❤'}
			</Typography>
		</div>
		
	);
}

export default Copyright;
