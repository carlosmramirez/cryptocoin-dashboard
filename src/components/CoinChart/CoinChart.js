import Chart from "react-google-charts";

export default function CoinChart(props) {
  return (
    <div>
      <Chart
        width={'600px'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          hAxis: {
            title: 'Date Range',
          },
          vAxis: {
            title: 'Price Per Coin',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}