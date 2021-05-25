export default function InfoSquare(props) {
  return (
    <a href={props.url}>
      <div className={props.type}>
        <img src={props.img} alt={props.img} width='50%' height='50%' />
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.description}</p>
      </div>
    </a>
  )
}