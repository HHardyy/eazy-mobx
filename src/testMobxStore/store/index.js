// @observable: * 概念: 创建一个被监听的对象, 没有@observable声明的视图不能检测到变化
// @computed: * 概念: 类比vue的Computed, 当依赖的值有变化时会执行一遍
// @action: * 概念: 改变store的值的行为
// extendObservable: * 概念: 初始为被 @observable设置为被监听值的, 可以通过extendObservable添加
//   否则自行添加的没办法被mobx检测到变化
// autorun: * 概念: 初始执行一次, 当依赖的值有变化时候就会执行里面的函数, 此方法在mobx-react中被 @observer 所替代
import { observable, computed, action } from 'mobx'
import moment from 'moment'

class MobxStore {
	@observable day = '2020/04/05'
	@observable time = '';
	@observable todos = [];
	@computed get desc(){
		return `[${this.time}]   you get ${this.todos.length} todo data`
	}
	@action setTodo = (todo) => {
		this.todos.push(todo)
	}
	@action removeTodo = (todo) => {
		this.todos = this.todos.filter(item => item!==todo)
	}
	@action resetTodo = () => {
		this.todos = []
	}
	@action updateTime = () => {
		this.time = moment().format('YYYY-MM-DD HH:mm:ss')
	}
}

const store = new MobxStore()

// 时间show
setInterval(() => {
	store.updateTime()
}, 1000)

export default store