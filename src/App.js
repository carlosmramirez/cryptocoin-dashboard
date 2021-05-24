import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import News from './pages/News.js';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/news">Crypto News</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/news' component={News} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
