import React, { useState, useContext, createContext } from 'react'
import { observer } from 'mobx-react'
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

const App = observer(({ appData }) => (
  <div>
	  <Count/>
	  <hr/>
	  <p>{appData.timer}</p>
	  <button onClick={appData.resetTimer}>重置</button>
  </div>
))

export default App