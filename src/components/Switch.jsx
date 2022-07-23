import React from 'react';
import { useState } from 'react'


const Switch = () => {
      const [count, setCount] = useState(0)
      const [tema, setTema] = useState("light")

   const sumar  = () => {
      
        setCount(prev => prev +1)
        setTema("dark")
    }
    const restar = () => {
      
      setCount(prev  => prev -1)
      setTema("light")

  }
    
  return (
 

    <div className={`switch ${tema}`}>
      
      <h2>Theme picker</h2>
      <h4>Times changed: {count}</h4>

      <button onClick={sumar}>tema claro</button>
      <button onClick={restar}>tema  oscuro</button>
       

    </div>
  )
}

export default Switch;
