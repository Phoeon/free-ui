import { PropType } from 'vue'
import { IDtType, IDateObject, IDtImportant } from '../../shared/types'
import { compare, dt2obj } from '../../shared/datetime'
export const SharedProps = {
    min:{type:Array as PropType<Array<number>>,default:()=>[-1,0,0,0,0,0]},
    max:{type:Array as PropType<Array<number>>,default:()=>[Number.MAX_SAFE_INTEGER,0,0,0,0,0]},
    clear:{type:Boolean,default:true},
    now:{type:Boolean,default:true},
    importants:Array as PropType<Array<IDtImportant>>,
    lang:Object as PropType<Record<string,unknown>>
}
export const SharedSingleProps = {
    ...SharedProps,
    modelValue:{type:Array as PropType<Array<number>>,required:true},
    innerState:{type:Object as PropType<IDateObject>,required:true},
    dtstring:String,
}
export const SharedCascadeProps = {
    ...SharedProps,
    start:{type:Array as PropType<Array<number>>,required:true},
    end:{type:Array as PropType<Array<number>>,required:true},
    startState:{type:Object as PropType<IDateObject>,required:true},
    endState:{type:Object as PropType<IDateObject>,required:true},
    emin:{type:Array as PropType<Array<number>>,default:()=>[-1,0,0,0,0,0]},
    smax:{type:Array as PropType<Array<number>>,default:()=>[Number.MAX_SAFE_INTEGER,0,0,0,0,0]},
    startString:String,
    endString:String,
}
export function getCst(){
    const now = new Date()
    return {
        now:[now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds()]
    }
}
export function getNow(){
    const now = new Date()
    return [now.getFullYear(),now.getMonth(),now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds()]
}
export function getState(mv:Array<number>,now:Array<number>){
    return {
        yyyy:mv[0]||now[0],
        MM:mv[1]||now[1],
        dd:mv[2]||now[2],
        hh:mv[3]||now[3],
        mm:mv[4]||now[4],
        ss:mv[5]||now[5],
    }
}
export const DtFormat = {
    datetime:'yyyy-MM-dd hh:mm:ss',
    date:'yyyy-MM-dd',
    month:'yyyy-MM',
    year:'yyyy',
    time:'hh:mm:ss'
}
export const DtType = {
    datetime:'datetime',
    date:'date',
    month:'month',
    year:'year',
    time:'time'
}
export function getInitCType(type:IDtType){
    if(type===DtType.datetime)return DtType.date as IDtType
    return type
}
export function nowAvaliable(min:Array<number>,max:Array<number>){
    const { yyyy,MM,dd,hh,mm,ss } = dt2obj(new Date())
    const now = [yyyy,MM,dd,hh,mm,ss]
    return compare(now,min)>=0&&compare(now,max)<=0
}