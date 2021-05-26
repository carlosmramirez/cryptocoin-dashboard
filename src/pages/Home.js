import { useState, useEffect } from 'react';

import CoinChart from '../components/CoinChart/CoinChart.js';
import WatchList from '../components/WatchList/WatchList.js';
import CoinNews from '../components/CoinNews/CoinNews.js';

import './assets/Home.css';

export default function Home(props) {
  const [bitcoinTicker, setBitcoinTicker] = useState('');
  const [ethereumTicker, setEthereumTicker] = useState('');
  const [dogecoinTicker, setDogecoinTicker] = useState('');
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd'
    )
    .then(res => res.json())
    .then(jsonRes => {
      setBitcoinTicker(jsonRes.bitcoin.usd);
      setEthereumTicker(jsonRes.ethereum.usd);
      setDogecoinTicker(jsonRes.dogecoin.usd);
      }
    );
    
    const interval = setInterval(() => { 
      setReload(!reload);
      console.log(reload)
    },20000);
    return () => {
      clearInterval(interval);
    }
  }, [reload]);
  console.log(bitcoinTicker, ethereumTicker, dogecoinTicker)   
  return (
    <div className='home-container'>
      <div className='coin-chart'>
        <CoinChart chartData={props.chartData} handleChartChange={props.handleChartChange}/> 
      </div>
      <div className='watch-list'>
        <WatchList 
          bitcoinTicker={bitcoinTicker}
          ethereumTicker={ethereumTicker}
          dogecoinTicker={dogecoinTicker} />
      </div>
      <div className='coin-news'>
        <CoinNews newsData={props.newsData} isNewsPage={false} />
      </div>
    </div>
  );
}