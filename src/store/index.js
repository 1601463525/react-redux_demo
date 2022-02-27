/*
 * createStore方法用来创建一个store
 * 引入reducers集合作为createStore的第一个入参
 * 传入applyMiddleware(thunk)作为createStore的第二个入参,作用是用来解决异步action
*/
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

export default createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
