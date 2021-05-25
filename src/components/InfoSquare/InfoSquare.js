export default function InfoSquare(props) {
  return (
    <a href={props.url}>
      <div>
        <img src={props.img} width='50%' height='50%' />
        <h3>{props.title}</h3>
        <h4>{props.author}</h4>
        <p>{props.description}</p>
      </div>
    </a>
  )
}