import CoinNews from "../components/CoinNews/CoinNews";

export default function News(props) {
  return (
    <div>
      <CoinNews newsData={props.newsData}/>
    </div>
  );
}