export default {
    noble(label:string,obj:any){
        console.log('%c%s',`color:#9166ff;background-color:#9166ff33;padding:3px 8px;`,label,obj)
    },
    info(label:string,obj:any){
        console.log('%c%s',`color:#4596ff;background-color:#4596ff33;padding:3px 8px;`,label,obj)
    },
    error(label:string,obj:any){
        console.log('%c%s',`color:#e55d5d;background-color:#e55d5d33;padding:3px 8px;`,label,obj)
    },
    success(label:string,obj:any){
        console.log('%c%s',`color:#57bd7c;background-color:#57bd7c33;padding:3px 8px;`,label,obj)
    },
    warn(label:string,obj:any){
        console.log('%c%s',`color:#ff954f;background-color:#ff954f33;padding:3px 8px;`,label,obj)
    },
}