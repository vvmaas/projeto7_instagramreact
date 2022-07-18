import React from 'react'

export default function PostActions(){
  const [curtida, setCurtida] = React.useState("heart-outline")

  function likeTog(){
    if (curtida === "heart-outline"){
      setCurtida("heart");
    }
    if (curtida === "heart"){
      setCurtida("heart-outline");
    }
  }

    return (      
  <div className="acoes">
    <div>
      <ion-icon  name={curtida} onClick={likeTog}></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    <div>
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
  </div>)
}