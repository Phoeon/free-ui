const path = require("path")
const fs = require("fs")
const genRoutes = require("./gen-routes")
const { RoutesCst } = require("./cst.js")
const 
    routes = genRoutes(RoutesCst.routesPath,true),
    parsedRoutes = JSON.stringify(routes,null,4).replace(/"?##"?/g,""),
    code = `export const routes = ${parsedRoutes}`;
fs.writeFileSync(path.resolve(__dirname,'../demos/routes.ts'),code)