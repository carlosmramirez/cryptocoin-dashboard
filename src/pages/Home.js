import React from 'react';

import CoinChart from '../components/CoinChart/CoinChart.js';
import WatchList from '../components/WatchList/WatchList.js';
import CoinNews from '../components/CoinNews/CoinNews.js';

import './assets/Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bitcoinTicker: '',
      ethereumTicker: '',
      dogecoinTicker: ''
    }
    this.fetchData = this.fetchData.bind(this);
  }

  intervalId = null;
  fetchData() {
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd'
    )
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({
          bitcoinTicker: jsonRes.bitcoin.usd,
          ethereumTicker: jsonRes.ethereum.usd,
          dogecoinTicker: jsonRes.dogecoin.usd
        })
      });
  } 

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(() => this.fetchData(), 20000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className='home-container'>
        <div className='coin-chart'>
          <CoinChart chartData={this.props.chartData} handleChartChange={this.props.handleChartChange} />
        </div>
        <div className='watch-list'>
          <WatchList
            bitcoinTicker={this.state.bitcoinTicker}
            ethereumTicker={this.state.ethereumTicker}
            dogecoinTicker={this.state.dogecoinTicker} />
        </div>
        <div className='coin-news'>
          <CoinNews newsData={this.props.newsData} isNewsPage={false} />
        </div>
      </div>
    );
  }
}

// will use function component later upon further development
// export default function Home(props) {
//   const [bitcoinTicker, setBitcoinTicker] = useState('');
//   const [ethereumTicker, setEthereumTicker] = useState('');
//   const [dogecoinTicker, setDogecoinTicker] = useState('');
//   const [reload, setReload] = useState(false);

//   useEffect(() => {
//     fetch(
//       'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd'
//     )
//     .then(res => res.json())
//     .then(jsonRes => {
//       setBitcoinTicker(jsonRes.bitcoin.usd);
//       setEthereumTicker(jsonRes.ethereum.usd);
//       setDogecoinTicker(jsonRes.dogecoin.usd);
//       }
//     );

//     const interval = setInterval(() => { 
//       setReload(!reload);
//       console.log(reload)
//     },20000);
//     return () => {
//       clearInterval(interval);
//     }
//   }, [reload]);
//   console.log(bitcoinTicker, ethereumTicker, dogecoinTicker)   
//   return (
//     <div className='home-container'>
//       <div className='coin-chart'>
//         <CoinChart chartData={props.chartData} handleChartChange={props.handleChartChange}/> 
//       </div>
//       <div className='watch-list'>
//         <WatchList 
//           bitcoinTicker={bitcoinTicker}
//           ethereumTicker={ethereumTicker}
//           dogecoinTicker={dogecoinTicker} />
//       </div>
//       <div className='coin-news'>
//         <CoinNews newsData={props.newsData} isNewsPage={false} />
//       </div>
//     </div>
//   );
// }

export default Home;