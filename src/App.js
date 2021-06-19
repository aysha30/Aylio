import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Copyright from "./components/Copyright";
import AboutMe from "./components/AboutMe";
import Wave from 'react-wavify';

export const theme = createMuiTheme({
    // palette: {
    //     // type: "dark"
		
    // }
	palette: {
		primary: {
			light: '#33ab9f',
			main: '#009688',
			dark: '#00695f',
			contrastText: '#fff',
		},
		secondary: {
			light: '#ffcf33',
			main: '#ffc400',
			dark: '#b28900',
			contrastText: '#000',
		},
	},
	typography: {
		fontFamily: [
			'Titillium Web', 'sans-serif',
		].join(','),
		transform: "none"
	},
});



const useStyle = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "100%",
		
	}
}));

function App() {

	const classes = useStyle();
	return (
		<ThemeProvider theme={theme}>
			<Paper className={classes.root}>
				<Navbar />
				<AboutMe />
				<Wave 
					fill={theme.palette.secondary.main}
					paused={false}
					options={{
					height: 30,
					amplitude: 10,
					speed: 0.35,
					points: 8
					}}
				/>
				<Copyright />
			</Paper>
		</ThemeProvider>
	);
}

export default App;
