import Skin from './components/skin'
import './app.css'
import { useState } from 'react'
export default function App() {
  const [hero, setHero] = useState('/sprites/skins/m2.png')

  const handleChange = (e) => {
    setHero(e.target.value)
  }

  return (
    <div>
      <div className="dropDown">
        <select onChange={(e) => handleChange(e)} name="cars" id="cars">
          <option value="/sprites/skins/m2.png">Minato Uzumaki</option>
          <option value="/sprites/skins/m1.png">Madara</option>
        </select>
      </div>
      <div className="content">
        <h2>Use only arrow keys</h2>
      </div>

      <div className="container">
        <Skin characterSkin={hero} />
      </div>
    </div>
  )
}
