import CoinChart from '../components/CoinChart/CoinChart.js';
import WatchList from '../components/WatchList/WatchList.js';
import CoinNews from '../components/CoinNews/CoinNews.js';

export default function Home() {
  return (
    <div>
      <CoinChart /> 
      <WatchList />
      <CoinNews />
    </div>
  );
}