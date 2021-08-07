import  { useEffect, useState } from 'react'

const Skinwalk = (maxSteps) => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [dir, setDir] = useState(0)
  const [step, setStep] = useState(0)

  useEffect(() => {
    let localStoragePositions= localStorage.getItem("lastPosition")
    if(localStoragePositions){
      var lastPosition = JSON.parse(localStorage.getItem("lastPosition"))
      setPosition({...position, x:lastPosition.x , y:lastPosition.y})
    }
  
  }, [])

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  }
  const stepSize = 16;
  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize,y : 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  }
  function walk(dir) {
    //  console.log(directions[dir])
    //  setDir(directions[dir])
    setDir((previousState) => {
      if (directions[dir] === previousState) move(dir)
      return directions[dir]
    })
    setStep((previousState) =>
      previousState < maxSteps - 1 ? previousState + 1 : 0
    )
  }

  function move(dir) {
    // console.log(modifier[dir].x)
    // console.log(modifier[dir].y)
    var nowX = position.x + modifier[dir].x
    var novY = position.y + modifier[dir].y
    var step = 16;
    if(nowX < 0 || novY < 0) return;
    if(nowX + step > 500 || novY + step > 500) return;
    
    localStorage.setItem("lastPosition", JSON.stringify(
      {
        x:position.x + modifier[dir].x, 
        y:position.y + modifier[dir].y
      }
    ))
    // console.log( position.x + modifier[dir].x,  position.y + modifier[dir].y)
    setPosition((previousState) => ({
      x: previousState.x + modifier[dir].x,
      y: previousState.y + modifier[dir].y,
    }))
  }
  return {
    walk,
    dir,
    step,
    position,
  }
}
export default Skinwalk
