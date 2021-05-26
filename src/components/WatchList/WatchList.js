import SimplePrice from "../SimplePrice/SimplePrice";

import './WatchList.css';

export default function WatchList(props) {
  return (
    <div className='watch-list-cointainer'>
      <SimplePrice coinName='Bitcoin' coinPrice={props.bitcoinTicker} />
      <SimplePrice coinName='Ethereum' coinPrice={props.ethereumTicker} />
      <SimplePrice coinName='Dogecoin' coinPrice={props.dogecoinTicker} />
    </div>
  );
}