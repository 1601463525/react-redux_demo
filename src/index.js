import ReactDOM from 'react-dom'
import App from './App'
import store from './store/index'
//注意Provider很重要,用来给每个容器组件传递一个store,并监控redux中状态的变化并重新渲染组件,这就是react-redux的好处
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>,
document.getElementById('root'))
