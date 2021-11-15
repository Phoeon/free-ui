import { isBetween } from './utils'
import { easeIn, linear } from './timing-fns'

export type EndPoint = {
    [k:string]:number
}
type Task = (now:EndPoint)=>void
type TimingFn = (...a:number[])=>number

export default class PhAnimation{
	static easeIn(task:Task,from:EndPoint,to:EndPoint,duration:number){
		return PhAnimation.animate(task,from,to,duration,easeIn)
	}
	static linear(task:Task,from:EndPoint,to:EndPoint,duration:number){
		return PhAnimation.animate(task,from,to,duration,linear)
	}
    static animate(task:Task,from:EndPoint,to:EndPoint,duration:number,timingFn:TimingFn){
		return new Promise((resolve)=>{
			const start = Date.now()
	
			const run = (from:EndPoint,to:EndPoint)=>{
				const 
					t = Date.now() - start,
					raf = requestAnimationFrame(()=>run(from,to))
				let now:EndPoint = {},
					stop = false;

				for(const k in from){
					now[k] = timingFn(t,from[k],to[k]-from[k],duration)
					if(stop)
						continue;
                    stop = !isBetween(now[k],from[k],to[k])
					if(stop)
						now[k] = to[k];
				}

				if(stop||t>duration){
					cancelAnimationFrame(raf)
					now = to
					resolve(true)
				}

				task(now)
			}
			run(from,to)
		})
	}
}