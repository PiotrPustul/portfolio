import { useContext } from 'react';
import { BreakpointProvider } from 'react-socks';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeContext } from './Context/ThemeContext';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

import './App.css';

const App = () => {
	const { themeState } = useContext(ThemeContext);

	return (
		<div className={`App ${themeState}`}>
			<Router>
				<BreakpointProvider>
					<header>
						<Header />
					</header>
				</BreakpointProvider>
				<Switch>
					<Route path='/' component={HomePage} exact />
					<Route path='/about' component={AboutPage} />
					<Route path='/projects' component={ProjectsPage} />
					<Route path='/contact' component={ContactPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
