import { preZNumber } from './utils'

export function compare(n1:Array<number>,n2:Array<number>){
    const 
        a = +n1.map(n=>preZNumber(n)).join(""),
        b = +n2.map(n=>preZNumber(n)).join("");
        return a-b
}
export function isSpecial(year:number):number{
    return Number(year%100?!(year%4):!(year%400))
}
export function getMonthDays(year:number):number[]{
    return [31,28+isSpecial(year),31,30,31,30,31,31,30,31,30,31,]
}
export function getDay(year:number,month:number,day:number):number{
    return new Date(year,month,day).getDay()
}
export function printDate(year:number,month:number):Array<Array<number[]>>{
    const days = getMonthDays(year)[month]
    const table = new Array(6) as Array<Array<number[]>>

    const dc = getDay(year,month,1)
    const mp = (month-1)%12
    const mn = (month+1)%12
    const count = dc+days;
    if(dc!=0){
        const dp = new Date(year,mp)
        const y = dp.getFullYear()
        const m = dp.getMonth()
        const pdays = getMonthDays(dp.getFullYear())[dp.getMonth()]
        table[0]=[]
        for(let i=0;i<dc;i++)
            table[0][i] = [y,m,pdays-dc+1+i]//[pdays-dc+1+i,m,y]
    }
    let r=0,d=0;
    for(let i=0;i<days;i++){
        d = (i+dc)%7
        r = Math.floor((i+dc)/7)
        table[r] = table[r]||new Array(7).fill(-1)
        table[r][d] = [year,month,i+1]//[i+1,month,year]
    }
    let empty = 0;
    for(let i=r;i<6;i++){
        empty+=i==r?6-d:7
    }

    const y = mn==0?year+1:year
    for(let i=0;i<empty;i++){
        d = (i+count)%7
        r = Math.floor((i+count)/7)
        table[r] = table[r]||new Array(7).fill(-1)
        table[r][d] = [y,mn,i+1]
    }
    return table
}

export const dsmap = {
    yyyy:'setFullYear',
    MM:'setMonth',
    dd:'setDate',
    hh:'setHours',
    mm:'setMinutes',
    ss:'setSeconds'
}  as {[k:string]:string}

export const dgmap = {
    yyyy:'getFullYear',
    MM:'getMonth',
    dd:'getDate',
    hh:'getHours',
    mm:'getMinutes',
    ss:'getSeconds'
}  as {[k:string]:string}
export function dt2obj(d:Date){
    return {
        yyyy : d.getFullYear(),
        MM : d.getMonth(),
        dd : d.getDate(),
        hh : d.getHours(),
        mm : d.getMinutes(),
        ss : d.getSeconds()
    }
}
export function parseDate(d:string,fmt:string):Date{
    const dto = dt2obj(new Date())
    const fmts = fmt.match(/([yMdhms]+)/g) as string[]
    const ds = d.match(/(\d+)/g) as string[]
    fmts.forEach((k:string,i:number)=>{
        const dto1 = dto as Record<string,number>
        dto1[k] = (+ds[i])+(k==="MM"?-1:0)
    })
    return new Date(dto.yyyy,dto.MM,dto.dd,dto.hh,dto.mm,dto.ss)
}
export function arr2dtobj(dn:Array<number>){
    return {
        yyyy:dn[0]||0,
        MM:dn[1]||0,
        dd:dn[2]||0,
        hh:dn[3]||0,
        mm:dn[4]||0,
        ss:dn[5]||0,
    }
}
export function dt2arr(d:Date){
    return [
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds()
    ]
}

export function formatDate(dn:Array<number>,fmt:string){
    const dto = arr2dtobj(dn) as Record<string,number>
    return fmt.replace(/[yMdhms]+/g,(a:string)=>{
        return preZNumber(a==="MM"?dto[a]+1:dto[a])
    })
}