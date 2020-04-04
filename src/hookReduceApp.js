import React, { useState, useContext, createContext } from 'react'
import ReducerDemo from './testUseReducer/index'

let CountContext = createContext()


function Child(){
  let count = useContext(CountContext)
  return (
    <div>child:{count}</div>
  )
}

function Count(){
  let [count, setCount] = useState(0)
  return (
    <div>
       <ReducerDemo/>

       <hr/>

       <div>当前数量为：{count}</div>
       <button onClick={()=>{setCount(count+1)}}>+</button>

       <CountContext.Provider value={count}>
         <Child />
       </CountContext.Provider>
    </div>
  )
}

const ReduceApp = () =>(
  <div>
	  <Count/>
	  <hr/>
  </div>
)

export default ReduceApp