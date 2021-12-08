import type { IValidationQueue, IValidatorTask } from '../../../shared/types'
type VTO={
    task:IValidatorTask,
    args?:Array<unknown>
}
export default {
	create():IValidationQueue{
		const queue:Array<VTO> = []
		return {
			use(task:IValidatorTask,args?:Array<unknown>):void{
				queue.push({task,args})
			},
            run(v:unknown):Promise<unknown>{
                const ite = queue[Symbol.iterator]();
                return new Promise((resolve,reject)=>{
                    const nextFn = ()=>{
                        const next = ite.next()
                        if(next.done)return resolve(true)
                        next.value.task(v,next.value.args,()=>nextFn(),reject)
                    }
                    nextFn()
                })
            }
		}
	}
}
