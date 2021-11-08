export const c1=`const open = (type:'success'|'danger'|'warning'|'info'|'notify')=>{
    FNotification[type]("一系列的信息描述。。。",{title:"通知信息标题"})
    .click((data:any)=>{
        console.log(data)
    })
    .close((data:any)=>{
        console.log(data)
    })
    .confirm((data:any)=>{
        console.log(data)
    })
}`