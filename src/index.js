import React from 'react';
import ReactDOM from 'react-dom';
import ReduceApp from './hookReduceApp.js'
import MobxApp from './mobxApp.js'

const App = () => (
    <>
	  <h1>hooks app</h1>
	  <ReduceApp />
	  <h1>mobx app</h1>
	  <MobxApp />
	</>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
