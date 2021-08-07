import React from 'react'
import Actor from '../actor'
import Keypress from '../../hooks/key-press'
import Skinwalk from '../../hooks/skin-walk'
const Skin = ({ characterSkin }) => {
  const {walk,dir,step,position} = Skinwalk(3);
  const actorSize = {
    h: 32,
    w: 32,
  }


  Keypress((event) => {
    event.preventDefault()
    const dir = event.key.replace('Arrow', '').toLowerCase()
    walk(dir)
  
  })


  return (
    <div>
      <Actor sprite={characterSkin} data={actorSize} dir={dir} step={step} position={position}/>
    </div>
  )
}

export default Skin
