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
import { useEffect, useState } from "react";

function App() {
  const [chartData, setChartData] = useState('');
  const [newsData, setNewsData] = useState('');

  const currUnixTime = Math.floor(Date.now() / 1000);
  const pastUnixTime = Math.floor(Date.now() / 1000) - 604800; //7 days ago

  // fetch chartData
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${pastUnixTime}&to=${currUnixTime}`
    )
      .then(res => res.json())
      .then(jsonRes => {
        return (
          jsonRes.prices.map(([time, price]) => {
            return [timeConverter(time), price];
          })
        );
      })
      .then(formattedData => {
        formattedData.unshift(['x', 'bitcoin']);
        setChartData(formattedData);
      })
  }, [currUnixTime, pastUnixTime]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=crypto%20OR%20bitcoin%20OR%20ethereum%20OR%20dogecoin&apiKey=21ce2a3193ea41259e98bfa5e9e711ef`
      )
      .then(res => res.json())
      .then(jsonRes => setNewsData(jsonRes))
  }, []);

  const timeConverter = (timeStamp) => {
    const date = new Date(timeStamp);
    return date;
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/news">Crypto News</Link>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home 
              chartData={chartData}
              newsData={newsData} />
          </Route>
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/news' component={News} />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
