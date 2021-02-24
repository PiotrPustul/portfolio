import './App.scss';
import './base/style.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Js/Header';
import MobileNav from './components/Js/MobileNav';
import HomePage from './pages/Js/HomePage';
import AboutPage from './pages/Js/AboutPage';
import ProjectsPage from './pages/Js/ProjectsPage';
import ContactPage from './pages/Js/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <nav>
          <MobileNav />
        </nav>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
