export default {
    setItem(k:string,v:any,json?:boolean){
        localStorage.setItem(k,json?JSON.stringify(v):v)
    },
    getItem(k:string,json?:boolean){
        const rawV = localStorage.getItem(k) as string
        try{
            if(json){
                return rawV===""?"":JSON.parse(rawV)
            }
        }catch(e){
            console.error(e)
        }
        return rawV
    }
}