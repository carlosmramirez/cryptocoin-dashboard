import './SimplePrice.css';

export default function SimplePrice(props) {
  return (
    <div className='simple-price-container'>
      {props.coinName}: ${props.coinPrice} USD
    </div>
  );
}