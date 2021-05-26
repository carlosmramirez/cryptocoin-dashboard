import './InfoSquare.css';

export default function InfoSquare(props) {
  return (
    <div className='info-square-container'>
      {
        props.isNewsPage &&
        props.type === 'large' &&
        <a href={props.url}>
          <div>Featured: </div>
          <div className={props.type}>
            <div className='featured-image'>
              <img src={props.img} alt={props.img} />
            </div>
            <div className='article-info'>
              <h3>{props.title}</h3>
              <h4>{props.author}</h4>
              <p>{props.description}</p>
            </div>
          </div>
        </a>
      }
      {
        props.isNewsPage &&
        props.type === 'small' &&
        <a href={props.url}>
          <div className={props.type}>
            <img src={props.img} alt={props.img} />
            <div className='article-info'>
              <h3>{props.title}</h3>
              <h4>{props.author}</h4>
              <p>{props.description}</p>
            </div>
          </div>
        </a>
      }
      { 
        !props.isNewsPage &&
        (props.type === 'small' || props.type === 'large') &&
        <a href={props.url}>
          <div className='small'>
            <img src={props.img} alt={props.img} />
            <div className='article-info'>
              <h3>{props.title}</h3>
              <h4>{props.author}</h4>
              <p>{props.description}</p>
            </div>
          </div>
        </a>
      }
    </div>
  )
}