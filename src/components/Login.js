import React, { Component } from 'react'
import {connect} from 'react-redux'
//这里引入了actions.js中定义好的动作对象
import {loginAction,authorityAction} from '../store/actions'
class Login extends Component {
    //调用修改登录后的状态为true
    loginIn =()=>{
        this.props.loginDispatch(true)
        this.props.authorityDispatch({name:'管理员'})
    }
    //调用修改登出后的状态为false
    loginOut =()=>{
        this.props.loginDispatch(false)
        this.props.authorityDispatch({name:'使用者'})
    }
    render() {
        return (
            <div>
                <h2>redux,react-redux Demo</h2>
                <hr />
                <h3>当前是{this.props.login ?'登入':'登出'}状态</h3>
                <h3>当前是{this.props.authority.name}权限</h3>
                <button onClick={this.loginIn}>登入</button>
                <button onClick={this.loginOut}>登出</button>
            </div>
        )
    }
}

export default connect(
    //注意此处是方法mapStateToProps方法的简写,接收redux中的状态对象集合state,本质是传递redux中的状态给UI组件

    state => ({
        login:state.loginState,
        authority:state.authorityState
    }),
    //注意此处是方法mapDispatchToProps方法的简写,接收redux中的dispatch方法,本质是传递redux中reducer方法给UI组件
    {
       loginDispatch:loginAction,
       authorityDispatch:authorityAction
    }
)(Login)
