import PostActions from "./PostActions"


//Objetos dos posts
let postsObj = [{userimg: "assets/img/meowed.svg", username: 'meowed', postimg:"assets/img/gato-telefone.svg", userlikeimg:"assets/img/respondeai.svg", userlike:"respondeai", numberlike:"101.523"},
              {userimg:"assets/img/barked.svg", username:"barked", postimg:"assets/img/dog.svg", userlikeimg:"assets/img/adorable_animals.svg", userlike:"adorable_animals", numberlike:"99.159"}]


//forma array de posts em JSX
let posts = postsObj.map(post =>  (<div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={post.userimg} alt=''/>
        {post.username}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={post.postimg} alt=''/>
    </div>

    <div class="fundo">
      
      <PostActions />

      <div class="curtidas">
        <img src={post.userlikeimg} alt=''/>
        <div class="texto">
          Curtido por <strong>{post.userlike}</strong> e <strong>outras {post.numberlike} pessoas</strong>
        </div>
      </div>
    </div>
  </div>))


export default function Posts () {
    return (
    <div class="posts">
        {posts}
    </div>)
}