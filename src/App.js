import React, { useContext } from 'react';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from './Context/ThemeContext';

import ScreenWidthProvider from './Context/ScreenWidthContext';
import Header from './components/Header/Header';
import MobileNav from './components/MobileNav/MobileNav';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

import './App.css';

const App = () => {
	const { themeState } = useContext(ThemeContext);

	return (
		<div className={`App ${themeState}`}>
			<ScreenWidthProvider>
				<Router>
					<header>
						<Header />
					</header>
					<nav>
						<MobileNav />
					</nav>
					<Switch>
						<Route path='/' component={HomePage} exact />
						<Route path='/about' component={AboutPage} />
						<Route path='/projects' component={ProjectsPage} />
						<Route path='/contact' component={ContactPage} />
					</Switch>
				</Router>
			</ScreenWidthProvider>
		</div>
	);
};

export default App;
