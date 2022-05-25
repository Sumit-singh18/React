import React from 'react'
import{useState} from 'react'

function State(){

    const [value,updatevalue]= useState(200)
    function AddValue(){
        updatevalue(value+2)
        
    }
    return <div>
        <span>{value}</span>
        <button onClick={AddValue}>Add 2</button>
    </div>
}
export default State;