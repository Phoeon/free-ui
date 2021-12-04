const path = require("path")
const fs = require("fs")
const getPageMeta = require('./gen-page-meta')
const { RoutesCst } = require("./cst")

const genRoutes = (dir,isRoot)=>{
    const apath = path.resolve(__dirname,dir)
    const files = fs.readdirSync(apath)
    const routes = []
    files.forEach(dn=>{
        const 
            fpath = path.join(dir,dn),
            routerPath = path.join(dir,(dn.startsWith("index.")?'':dn)),
            purePath = routerPath.replace(RoutesCst.routesPath,"").split(".")[0]||"/",
            name = purePath;
        
        const route = {
            path:purePath,
            name,
        }
        if(fs.statSync(path.join(apath,dn)).isFile()){
            route.fpath = path.join(apath,dn)
        }else{
            route.fpath = path.resolve(apath,dn,'./index.md')
            const children = genRoutes(fpath).filter(r=>r.path!==route.path)
            if(children.length)
            route.children = children
        }
        if(route.path==="/"&&isRoot)
            routes.unshift(route)
        else routes.push(route)
        
        route.component = `##() => import('${route.fpath}')##`
        const {title,icon} = getPageMeta(route.fpath)
        route.meta = {
            title,icon
        }
        delete route.fpath
    })
    return routes
}

module.exports = genRoutes

