export type IValidResult = {
    valid:boolean,
    tip?:string
}
export type IValidOption = string|{name:string,args:Array<unknown>}
export type IFieldValidFn = ()=>Promise<unknown>
export interface IValidator {
    validField:(value:unknown,validMeta:Array<IValidOption>)=>Promise<unknown>
    validForm:()=>Promise<unknown>,
    registerField:(id:string,field:IFieldValidFn)=>void,
    ungisterField:(id:string)=>void
}
export type IValidatorTask = (v:unknown,args?:Array<unknown>,next:()=>void,reject:(d?:any)=>void)=>void

export interface IValidationQueue{
    use(task:IValidatorTask,args?:Array<unknown>):void
    run(ctx:unknown):Promise<unknown>
}