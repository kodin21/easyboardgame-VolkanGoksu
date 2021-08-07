import React from 'react'

const Sprite = ({img,data,position}) => {
    const{x,y,h,w} = data;
  return (
    <div
      style={{
        // display: 'inline-block',
        position:'absolute',
        top:position.y,
        left:position.x,
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${x}px -${y}px`
      }}
    ></div>
  )
}

export default Sprite
