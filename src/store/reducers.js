//使用combineReducers合并reducer

import {combineReducers} from 'redux'

const reducers = combineReducers({
    //登录态reducer
    loginState:(preState=false,action)=>{
        switch (action.type) {
            case 'login':return action.data
            default:return preState
        }
    },
    //用户权限reducer
    authorityState:(preState={name:'使用者'},action)=>{
        switch (action.type) {
            case 'authority':return action.data
            default:return preState
        }
    }
})

export default reducers


