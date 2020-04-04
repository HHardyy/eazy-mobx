import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext({})

export const UPDATE_COLOR = 'color/UPDATE_COLOR'

const reduce = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default: 
      return state
  }
}

const ColorArea = (props) => {
  const [color, dispatch] = useReducer(reduce, 'orange')

  return (
    <ColorContext.Provider value={{color, dispatch}}>
      {props.children}
    </ColorContext.Provider>
  )
}

export default ColorArea