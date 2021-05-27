import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header.js';
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import News from './pages/News.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: '',
      newsData: '',
      currChart: 'bitcoin'
    }
    this.getCurrUnixTime = this.getCurrUnixTime.bind(this);
    this.getPastUnixTime = this.getPastUnixTime.bind(this);
    this.timeConverter = this.timeConverter.bind(this);
    this.handleChartChange = this.handleChartChange.bind(this);
  }

  getCurrUnixTime() {
    return Math.floor(Date.now() / 1000);
  }
  getPastUnixTime() {
    return Math.floor(Date.now() / 1000) - 604800; //7 days ago
  }

  componentDidMount() {
    const currUnixTime = this.getCurrUnixTime();
    const pastUnixTime = this.getPastUnixTime();

    fetch(
      `https://api.coingecko.com/api/v3/coins/${this.state.currChart}/market_chart/range?vs_currency=usd&from=${pastUnixTime}&to=${currUnixTime}`
    )
    .then(res => res.json())
    .then(jsonRes => {
      return (
        jsonRes.prices.map(([time, price]) => {
          return [this.timeConverter(time), price];
        })
      );
    })
    .then(formattedData => {
      formattedData.unshift(['x', this.state.currChart]);
      this.setState({ chartData: formattedData });
    })

    fetch(
      `https://newsapi.org/v2/everything?q=crypto%20OR%20bitcoin%20OR%20ethereum%20OR%20dogecoin&apiKey=21ce2a3193ea41259e98bfa5e9e711ef`
    )
    .then(res => res.json())
    .then(jsonRes => this.setState({ newsData: jsonRes }));
  }

  timeConverter(timeStamp) {
    const date = new Date(timeStamp);
    return date;
  }
    
  handleChartChange(e) {
    console.log('here')
    this.setState({ currChart: e.target.value })
    console.log(this.state.currChart)
  }


  render() {
    return(
      <Router>
      <div className='app-container'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home 
              chartData={this.state.chartData}
              handleChartChange={this.handleChartChange}
              newsData={this.state.newsData} />
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio
              chartData={this.state.chartData}
              handleChartChange={this.handleChartChange} />
          </Route>
          <Route exact path='/news'>
            <News
              newsData={this.state.newsData} />
          </Route>
        </Switch>
      </div>

    </Router>
    );
  }
}

export default App;
