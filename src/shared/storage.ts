export default {
    setItem(k:string,v:any,json?:boolean){
        localStorage.setItem(k,json?JSON.stringify(v):v)
    },
    getItem(k:string,json?:boolean){
        const rawV = localStorage.getItem(k)
        if(json){
            return rawV===""?"":JSON.parse(rawV)
        }
        return rawV
    }
}