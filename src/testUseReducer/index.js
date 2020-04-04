import React from 'react'
import Area from './components/area'
import Buttons from './components/buttons'

import ColorArea from './store/color'

const ReducerDemo = () => {
  return (
    <div>
      <ColorArea>
          <Area/>
          <Buttons/>
      </ColorArea>
    </div>
  )
}

export default ReducerDemo