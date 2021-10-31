import { isEmpty } from '../../../shared/utils'
export function required(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
    if(!isEmpty(v))next()
    else reject({
        valid:false,
        tip:"该字段不可为空"
    })
}

// export function number(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const flag = isEmpty(v)||!isNaN(v as number)
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip:"非法数字"
//     })
// }
// export function numberRange(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const 
//         min = Number(args[0]),
//         max = Number(args[1]),
//         ns = (v as number[])[0],
//         ne = (v as number[])[1];
//     const flag = isEmpty(v)||numberRangeValid(ns,ne,min,max)
//     if(flag===true)next()
//     else reject({
//         valid:false,
//         tip:flag as string
//     })
// }
// export function datetimeRange(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const 
//         start = (v as string[])[0],
//         end = (v as string[])[1],
//         min = args[0]?.replace(/_/g,"/"),
//         max = args[1]?.replace(/_/g,"/");
//     const flag = isEmpty(v)||datetimeRangeValid(start,end,min,max);
//     if(flag===true)next()
//     else reject({
//         valid:false,
//         tip:flag as string
//     })
// }
// export function email(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const flag =isEmpty(v)|| Reg.email.test(v as string)
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip:"非法邮箱"
//     })
// }
// export function color(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const flag = isEmpty(v)||parseColor(v as string).rgba
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip:`非法颜色格式【${v}】<hex|rgb|rgba|hls|hlsa>`
//     })
// }
// export function url(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const flag = isEmpty(v)||Reg.url.test(v as string)
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip:"url地址格式错误"
//     })
// }
// export function mobile(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const flag = isEmpty(v)||Reg.mobile.test(v as string)
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip:"手机号码格式错误"
//     })
// }
// export function length(v:unknown,args:string[]=[],next:()=>void,reject:(d?:any)=>void){
//     console.log(args)
//     const s = Number(args[0]),
//         e = Number(args[1]);
//     if(!args||args.length==0) throw new Error("validator:[length] need 1-2 args,got :"+args)
//     if(args.length==1&&isNaN(s)||s<0)throw new Error("validator:[length] args[0] should >= 0,got :"+args[0])
//     if(args.length==2){
//         if(
//             isNaN(s)||
//             isNaN(e)||
//             s<0||
//             e<0||
//             e<s
//             ) throw new Error("validator:[length] 参数非法"+args)
//     }
//     const len = ((v as string)+"").length
//     const flag = isEmpty(v)||(args[0]&&len>=s&&(!args[1]||len<=e))
//     let tip = ""
//     if(args.length==1)
//         tip=`长度>=${args[0]}`
//     else tip = `长度在${args[0]}-${args[1]}之间`
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip
//     })
// }
// export function chinese(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     const flag = isEmpty(v)||Reg.chinese.test(v as string)
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip:"请输入中文"
//     })
// }
// export function regexp(v:unknown,args:string[],next:()=>void,reject:(d?:any)=>void){
//     if(!args||args.length==0)throw new Error("validator regexp neet 1 args ,got 0")
//     console.log(args)
//     const reg = new RegExp(args[0])
//     const flag = isEmpty(v)||reg.test(v as string)
//     if(flag)next()
//     else reject({
//         valid:false,
//         tip:`正则匹配失败${reg}.test(${v}) -> false`
//     })
// }

