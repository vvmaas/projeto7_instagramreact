
function Story(props) {
    return (<div class="story">
    <div class="imagem">
      <img src={props.img} />
    </div>
    <div class="usuario">
        {props.username}
    </div>
  </div>)
}

export default function Stories(){
    return (<div class="stories">
    <Story 
    username="9gag" 
    img="assets/img/9gag.svg"
    />
    <Story 
    username="meowed" 
    img="assets/img/meowed.svg"
    />
    <Story 
    username="barked" 
    img="assets/img/barked.svg"
    />
    <Story 
    username="nathanwpylestrangeplanet" 
    img="assets/img/nathanwpylestrangeplanet.svg"
    />
    <Story 
    username="wawawicomics" 
    img="assets/img/wawawicomics.svg"
    />
    <Story 
    username="respondeai" 
    img="assets/img/respondeai.svg"
    />
    <Story 
    username="filomoderna" 
    img="assets/img/filomoderna.svg"
    />
    <Story 
    username="memeriagourmet" 
    img="assets/img/memeriagourmet.svg"/
    >

    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>

  </div>
)
}