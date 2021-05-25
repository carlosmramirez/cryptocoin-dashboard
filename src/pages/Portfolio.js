import CoinChart from "../components/CoinChart/CoinChart";

export default function Portfolio(props) {
  return (
    <div>
      <CoinChart chartData={props.chartData} handleChartChange={props.handleChartChange}/>
      <div className='portfolio-breakdown'>
        <h2>Your Portfolio Breakdown:</h2>
        <p>Bitcoin: $303.99 0.008 BTC Allocation: 1/3</p>
        <p>Ethereum: $303.99 0.008 ETH Allocation: 1/3</p>
        <p>Dogecoin: $303.99 0.008 DOGE Allocation: 1/3</p>
      </div>
    </div>
  );
}