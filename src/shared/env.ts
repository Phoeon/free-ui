const win = window as any
const ph:Record<string,any> = win.$ph = win.$ph||{}
export default {
    set(k:string,value:any){
        ph[k] = value
    },
    get(k:string){
        return ph[k]
    }
}