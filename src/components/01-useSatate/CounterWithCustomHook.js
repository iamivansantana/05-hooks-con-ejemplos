import React from 'react'
import { useCounter } from '../../hook/useCounter'
import './Counter.css'



const CounterWithCustomHook = () => {

    
    const {state,increment,decrement,reset} = useCounter(100);

    return (
        <>
          <h1> Counter With Hook: { state }</h1>  
          <hr />
          <button onClick={()=>increment(3)} className="btn btn-primary">+1</button>
          <button onClick={()=>reset()} className="btn btn-primary">reset</button>
          <button onClick={()=>decrement(1)} className="btn btn-primary">-1</button>
          
        </>
    )
}

export default CounterWithCustomHook
