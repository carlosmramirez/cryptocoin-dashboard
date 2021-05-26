import Chart from "react-google-charts";

import './CoinChart.css';

export default function CoinChart(props) {
  return (
    <div className='chart-container'>
      <Chart
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={props.chartData}
        options={{
          hAxis: {
            title: 'Date Range',
          },
          vAxis: {
            title: 'Price Per Coin USD',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      <div className='input-container'>
        <label>
          <input type='radio' value='bitcoin' name='currChart' defaultChecked onChange={props.handleChartChange} /> Bitcoin
        </label>
        <label>
          <input type='radio' value='ethereum' name='currChart' onChange={props.handleChartChange} /> Ethereum
        </label>
        <label>
          <input type='radio' value='dogecoin' name='currChart' onChange={props.handleChartChange} /> Dogecoin
        </label>
      </div>
      
    </div>
  );
}