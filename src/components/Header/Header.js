import { Link } from 'react-router-dom';
import Icon from './images/headerIcon.png';

import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <img src={Icon} alt='Noimage'></img>
      <nav className='nav-bar'>
        <Link to="/" className='header-link'>Home</Link>
        <Link to="/portfolio" className='header-link'>Portfolio</Link>
        <Link to="/news" className='header-link'>Crypto News</Link>
      </nav>
    </div>
  )
}