import React from 'react'

export default function PostActions(){
  const [curtida, setCurtida] = React.useState('heart-outline')
  const [color, setColor] = React.useState("black")

  function likeTog(){
    if (curtida === 'heart-outline'){
      setCurtida('heart')
      setColor("red")
    }
    if (curtida === 'heart'){
      setCurtida('heart-outline')
      setColor("black")
    }
  }

    return (      
  <div className="acoes">
    <div>
      <ion-icon className={color} name={curtida} onClick={likeTog}></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    <div>
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
  </div>)
}