import React from 'react'
import { Provider } from 'mobx-react'
import store from './testMobxStore/store/index'
import Home from './testMobxStore/components/home'

const MobxApp = () => {
	return (
	   <>
	     <Provider store={store}>
		    <Home />
		 </Provider>
	   </>
	)
}

export default MobxApp