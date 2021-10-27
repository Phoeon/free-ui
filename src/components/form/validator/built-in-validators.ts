import { isEmpty } from '../../../shared/utils'
export function required(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
    if(!isEmpty(v))next()
    else reject({
        valid:false,
        tip:"该字段不可为空"
    })
}