export default function WatchList(props) {
  return (
    <div>
      <div>
        Bitcoin: ${props.bitcoinTicker} USD
      </div>
      <div>
        Ethereum: ${props.ethereumTicker} USD
      </div>
      <div>
        Dogecoin: ${props.dogecoinTicker} USD
      </div>
    </div>
  );
}