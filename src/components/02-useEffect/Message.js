
import React, { createContext, useEffect, useState } from 'react'

const Message = () => {

    const [cords, setCords] = useState({x: 0, y: 0});
    const {x,y}=cords;

    useEffect(() => { 
        
        const mouseMove = (e)=>{
            const cordenadas = {x: e.x, y: e.y}
            setCords(cordenadas);
        }

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])

    return (
        <>
          <h3>YOU'RE GREATE</h3>  
          <p>
              x: {x}, y: {y}
          </p>
        </>
    )
}

export default Message

