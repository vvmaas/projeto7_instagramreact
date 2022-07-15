let storyObj = [{username:"9gag", 
                img:"assets/img/9gag.svg" },
              {    username:"meowed", 
              img:"assets/img/meowed.svg"},
            {    username:"barked", 
            img:"assets/img/barked.svg"},
          {   username:"nathanwpylestrangeplanet", 
          img:"assets/img/nathanwpylestrangeplanet.svg"},
        {    username:"wawawicomics", 
        img:"assets/img/wawawicomics.svg"},
      {    username:"respondeai", 
      img:"assets/img/respondeai.svg"},
    {    username:"filomoderna", 
    img:"assets/img/filomoderna.svg"},
  {   username:"memeriagourmet", 
  img:"assets/img/memeriagourmet.svg"}]


let stories = storyObj.map(story => (<div class="story">
    <div class="imagem">
      <img src={story.img} alt=''/>
    </div>
    <div class="usuario">
        {story.username}
    </div>
  </div>)
)

export default function Stories(){
    return (
    <div class="stories">

    {stories}

    <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>

  </div>
)
}