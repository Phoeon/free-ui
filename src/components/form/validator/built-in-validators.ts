import { isEmpty , Reg } from '../../../shared/utils'
export function required(v:unknown,args:any,next:()=>void,reject:(d?:any)=>void){
    if(!isEmpty(v))next()
    else reject({
        valid:false,
        tip:"该字段不可为空"
    })
}

export function number(v:unknown,args:any,next:()=>void,reject:(d?:any)=>void){
    const flag = isEmpty(v)||Reg.Number.test(v as string)
    if(flag)next()
    else reject({
        valid:false,
        tip:"非法数字"
    })
}
export function email(v:unknown,args:any,next:()=>void,reject:(d?:any)=>void){
    const flag =isEmpty(v)|| Reg.email.test(v as string)
    if(flag)next()
    else reject({
        valid:false,
        tip:"非法邮箱"
    })
}
export function url(v:unknown,args:any,next:()=>void,reject:(d?:any)=>void){
    const flag = isEmpty(v)||Reg.url.test(v as string)
    if(flag)next()
    else reject({
        valid:false,
        tip:"url地址格式错误"
    })
}
export function mobile(v:unknown,args:any,next:()=>void,reject:(d?:any)=>void){
    const flag = isEmpty(v)||Reg.mobile.test(v as string)
    if(flag)next()
    else reject({
        valid:false,
        tip:"手机号码格式错误"
    })
}
export function chinese(v:unknown,args:any,next:()=>void,reject:(d?:any)=>void){
    const flag = isEmpty(v)||Reg.chinese.test(v as string)
    if(flag)next()
    else reject({
        valid:false,
        tip:"请输入中文"
    })
}
export function regexp(v:unknown,args:RegExp,next:()=>void,reject:(d?:any)=>void){
    const flag = isEmpty(v)||args.test(v as string)
    if(flag)next()
    else reject({
        valid:false,
        tip:`正则匹配失败${args}.test(${v}) -> false`
    })
}

