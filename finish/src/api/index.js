import request from './requset'
export const reqUserinfo=()=>request.get('127.0.0.1:8088/api/userinfo')