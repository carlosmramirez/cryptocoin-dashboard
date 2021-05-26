import CoinNews from "../components/CoinNews/CoinNews";

import './assets/News.css';

export default function News(props) {
  return (
    <div className='news-container'>
      <CoinNews newsData={props.newsData} isNewsPage={true}/>
    </div>
  );
}