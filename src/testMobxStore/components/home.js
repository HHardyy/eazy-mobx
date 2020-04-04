import React from 'react'
import { inject, observer } from 'mobx-react'

const ADD = 'ADD'
const REMOVE = 'REMOVE'
const RESET = 'RESET'
/*
@inject('store')： 注入store
@observer： 对这个页面进行观察
*/

@inject('store') @observer
class Home extends React.Component {
	constructor(props) {
	    super(props)
		this.state = {
			todotxt: ''
		}
	}
	
	handeTodo(method, item='') {
		const { setTodo, resetTodo, removeTodo } = this.props.store
		const { todotxt } = this.state
		switch(method){
			case ADD:
			    setTodo(todotxt)
				break
			case REMOVE:
			    removeTodo(item)
				break
			case RESET:
			    resetTodo(todotxt)
				break
			default:
			  return method 
		}
	}
	
	render() {
		const {day, todos, desc} = this.props.store
		
		return (
			<>
			 <p>made: {day}</p>
			 <p>{desc}</p>
			   <input 
			     type="text" 
				 placeholder="输入todo" 
				 onInput={(el) => {
					 this.setState({
						 todotxt: el.target.value
					 })
				 }}/>
			   <button onClick={() => this.handeTodo(ADD)}>add</button>
			   <button onClick={() => this.handeTodo(RESET)}>reset</button>
			   
			   <h5>TODOS list</h5>
			   {
				   todos.map(item => (
				       <div key={item}>
					     {item}
						 <button onClick={() => this.handeTodo(REMOVE, item)}>remove</button>
					   </div>
				   ))
			   }
			</>
		)
	}
}

export default Home