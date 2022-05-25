import React from 'react'
import { useEffect,useState } from 'react'

function Timer() {
    const [Time, updateTime] = useState(100)
    useEffect(() => {
        
        const timerID = setTimeout(() => {
            if(Time>0)
            updateTime(Time - 1)
        }, 1000)
        return ()=>{
            clearTimeout(timerID)
        }
    }, [Time])
    
    return <div>
        {Time}
    </div>
    


}
export default Timer;

// use effect is run after rendiring the page