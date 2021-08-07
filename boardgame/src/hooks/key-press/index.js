import {useEffect} from 'react';

const Keypress=(fn)=>{
   useEffect(()=>{
      window.addEventListener("keydown",fn);
      return()=>window.removeEventListener("keydown",fn)
   },[fn])
}
export default Keypress;