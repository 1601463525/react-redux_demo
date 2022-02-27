/*
 * action 本质是个动作对象,是reducer的第二个入参
 */
//登录态action
export  const loginAction = (data)=>{
    return {type:'login',data}
}
//用户权限action
export  const authorityAction = (data)=>{
    return {type:'authority',data}
}

