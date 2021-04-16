import './base/style.scss';
import './App.scss';

import {
	HashRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import ScreenWidthProvider from './Context/ScreenWidthContext';
import Header from './components/Header/Header';
import MobileNav from './components/MobileNav/MobileNav';
import HomePage from './pages/Js/HomePage';
import AboutPage from './pages/Js/AboutPage';
import ProjectsPage from './pages/Js/ProjectsPage';
import ContactPage from './pages/Js/ContactPage';

const App = () => {
	return (
		<div className="App">
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
