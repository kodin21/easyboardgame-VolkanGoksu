import React from 'react';
import Sprite from '../sprite'
const Actor =({data,step=0,sprite, position={x:0,y:0},dir=0})=>{
    const{h,w} = data;
    return(
        <Sprite img={sprite} 
        position={position}
        data={{
          x:step*w,
          y:dir*h,
          w,
          h,
        }}
        />
    )
}
export default Actor;