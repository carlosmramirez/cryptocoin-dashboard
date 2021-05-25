import Chart from "react-google-charts";

export default function CoinChart(props) {
  return (
    <div>
      <Chart
        width={'100%'}
        height={'500px'}
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
      <input type='radio' value='bitcoin' name='currChart' defaultChecked onChange={props.handleChartChange} /> Bitcoin
      <input type='radio' value='ethereum' name='currChart' onChange={props.handleChartChange} /> Ethereum
      <input type='radio' value='dogecoin' name='currChart' onChange={props.handleChartChange} /> Dogecoin
      
    </div>
  );
}