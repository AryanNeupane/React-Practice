

import { useEffect, useState } from "react"
function LearningUseEffect(){
    
    
       
            const [count,setCount]=useState(0)
            const increaseCount=()=>{
                setCount(count+1)
            }
            const decreaseCount=()=>{
                setCount(count-1)
     
            }
            useEffect(()=>{
                console.log("HEllo")
            },[count])
        
    
        return (
            <>
            <h1>{count}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
            
            </>
        )
    
}



export default LearningUseEffect