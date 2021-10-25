import { getTouchEvents } from 'ph-util'

export const GestureType = {
    tap:'tap',
    swipe:'swipe',
    swipeleft:'swipeleft',
    swiperight:'swiperight',
    swipedown:'swipedown',
    swipeup:'swipeup',
    longtap:'longtap',
    touchmove:'touchmove'
}
type CallbackFn = (...a:any[])=>void
const {touchstart,touchmove,touchend} = getTouchEvents()
const touch = touchstart==="touchstart"
    
export default class PhGesture{
    private target:Element;
    private type:string;
    private touches={x:0,y:0};
    private translate = {x:0,y:0};
    private thx:number;
    private thy:number;

    private _moving:boolean;
    private _leaving: boolean;
    private _longtouch: boolean;

    private _stop : boolean;
	private _select:boolean;
    private _capture: boolean;
    private _timer = -1;
    private _start_time = -1;
    private _time_out = 150;
    private callback:(e:Event,meta?:unknown)=>void

    constructor(el:Element,type:string,callback:CallbackFn,opt?:{select?:boolean,stop?:boolean,timeout?:number,capture?:boolean}){
        this.thx = 20
        this.thy = 50
        this.target = el;
        this.type = type
        this._moving = false
        this._leaving = false
        this._longtouch = false
        this._stop = !!(opt?.stop)
		this._select = !!(opt?.select)
        this._capture = !!(opt?.capture)
        this._time_out = opt&&opt.timeout?opt.timeout:this._time_out
        this.callback = (e:Event,meta?:unknown)=>{
            if(typeof callback === "function"){
                callback(e,meta,opt)
            }
        }
        const doc = document as any
        
		const stopselect = (e:Event)=>e.preventDefault()
        const start = (e:TouchEvent)=>{
            if(this._stop){
                e.stopPropagation()
            }
            this.start(e)
            doc.addEventListener(touchmove,move,{passive:false,capture:this._capture})
			doc.addEventListener(touchend,up,{passive:false,capture:this._capture})
			if(!this._select)
			doc.addEventListener("selectstart",stopselect)
        }
        const up = (e:TouchEvent)=>{
            if(this._stop){
                e.stopPropagation()
            }
            this.end(e)
            doc.removeEventListener(touchmove,move,{passive:false,capture:this._capture})
            doc.removeEventListener(touchend,up,{passive:false,capture:this._capture})
			if(!this._select)
			doc.removeEventListener("selectstart",stopselect)
        }
        const move = (e:TouchEvent)=>{
            this.move(e)
        }
        ;(this.target as any).addEventListener(touchstart,start,this._capture)
        if(touch&&this._stop){
            this.target.addEventListener("click",(e:Event)=>{
                console.log("click")
                e.stopPropagation()
                e.stopImmediatePropagation()
            })
        }
    }
    private getEXY(e:any){
        const xy = touch?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}
        return xy
    }
    private getTXY(e:any){
        let ntf = [0,0]
        const dom = this.target as HTMLElement;
        const tf = dom.style.transform.match(/([+-\d.]+(?=px))/g)
        if(tf)ntf = [Number(tf[0])||0,Number(tf[1])||0]
        const [x,y]= ntf;
        return {x,y}
    }
    private getMeta(e:TouchEvent|MouseEvent){
        const {touches,translate} = this
        const {x,y} = this.getEXY(e)
        const dx=x-touches.x;
        const dy=y-touches.y;
        return {
            tx:translate.x+dx,
            ty:translate.y+dy,
            dx,
            dy
        }
    }
    private start(e:TouchEvent|MouseEvent){
        this.touches=this.getEXY(e);
        this.translate=this.getTXY(e)
        this._moving=true;
        this._leaving=true;
        this._longtouch=true;
        this._start_time = e.timeStamp
        this._timer=setTimeout(()=>{
            if(this._leaving&&this._moving){
                this.type==GestureType.longtap&&this.callback(e);
                this._longtouch=false;
                this._leaving=false;
            }
        },1000) as any;
    }
    private move(e:TouchEvent|MouseEvent){
        this._moving = false
        const {type,_leaving} = this
        if(_leaving&&type==GestureType.touchmove){
            e.preventDefault()
            const meta = this.getMeta(e)
            this.callback(e,meta)
        }
    }
    private end(e:TouchEvent|MouseEvent){
        const {thx,thy,_timer,touches,type,_longtouch,_moving,_start_time,_time_out} = this
        const {x,y} = this.getEXY(e)
        const disX=x-touches.x;
        const disY=y-touches.y;
        const meta = this.getMeta(e)
        const speed = Math.max(400/(e.timeStamp - _start_time),1)
        clearTimeout(_timer);
        if(Math.abs(disX)>thx||Math.abs(disY)>thy){
            type==GestureType.swipe&&this.callback(e)
            if(e.timeStamp - _start_time <= _time_out ){
                if(Math.abs(disX)>Math.abs(disY)){
                    if(
                        (disX>thx&&type==GestureType.swiperight)||
                        (disX<-thx&&type==GestureType.swipeleft)
                    )
                        this.callback(e,{...meta,speed})
                }else{
                    if(
                        (disY>thy&&this.type==GestureType.swipedown)||
                        (disY<-thy&&this.type==GestureType.swipeup)
                    )
                        this.callback(e,{...meta,speed})
                }
            }
        }else{
            if(_longtouch&&_moving){
                type==GestureType.tap&&this.callback(e);
            }
        }
        if(type==GestureType.touchmove){
            this.callback(e,{...meta,end:true,speed})
        }
        this._longtouch=false;
        this._leaving=false;
    }
}