export default function Usuario(props){
    return (
    <div class="usuario">
    <img src={props.img} alt=''/>
    <div class="texto">
      <strong>{props.username}</strong>
      {props.nickname}
    </div>
  </div>)
}