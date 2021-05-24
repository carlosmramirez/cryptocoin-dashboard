import { useState, useEffect } from 'react';

import CoinChart from '../components/CoinChart/CoinChart.js';
import WatchList from '../components/WatchList/WatchList.js';
import CoinNews from '../components/CoinNews/CoinNews.js';

export default function Home() {
  const [chartData, setChartData] = useState('')

  const currUnixTime = Math.floor(Date.now() / 1000); 
  const pastUnixTime = Math.floor(Date.now() / 1000) - 604800; //7 days ago

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
  },[])
     
  const timeConverter = (unixTime) => {
    const date = new Date(unixTime).toLocaleDateString("en-US");
    return date;
  }
  
  return (
    <div>
      <CoinChart data={chartData}/> 
      <WatchList />
      <CoinNews />
    </div>
  );
}