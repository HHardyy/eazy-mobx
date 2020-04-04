import React, { useContext } from 'react'
import { ColorContext } from '../store/color'
const Area = () => {
  let {color} = useContext(ColorContext)
  return (
    <div style={{color}}>
      当前的颜色是;{color}
    </div>
  )
}

export default Area