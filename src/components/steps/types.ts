export type IStep = {
    status:number, //-1 not done 0 ing 1 done,
    value:number, // 当前的步值，如果没有，默认按照步骤顺序从1开始
    title:string,
    desc?:string,
    icon?:string
}