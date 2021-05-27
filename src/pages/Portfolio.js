import CoinChart from "../components/CoinChart/CoinChart";

import './assets/Portfolio.css';

export default function Portfolio(props) {
  return (
    <div className='portfolio-container'>
      <CoinChart chartData={props.chartData} handleChartChange={props.handleChartChange}/>
      <div className='portfolio-breakdown'>
        <div>Your Portfolio Breakdown:</div>
        <div className='coin-breakdown'>
          <div>Bitcoin: $303.99</div>
          <div>0.008 BTC</div>
          <div>Allocation: 1/3</div>
        </div>
        <div className='coin-breakdown'>
          <div>Ethereum: $303.99</div>
          <div>0.111 ETH</div>
          <div>Allocation: 1/3</div>        
        </div>
        <div className='coin-breakdown'>
          <div>Dogecoin: $303.99</div>
          <div>860.125 DOGE</div>
          <div>Allocation: 1/3</div> 
        </div>
        <div className='coin-breakdown'>
          <div>US Dollar: $0</div>
          <div>0 USD</div>
          <div>Allocation: 0</div> 
        </div>
        <div className='coin-breakdown'>
          <div>Litecoin: $0</div>
          <div>0 LTC</div>
          <div>Allocation: 0</div> 
        </div>
      </div>
    </div>
  );
}