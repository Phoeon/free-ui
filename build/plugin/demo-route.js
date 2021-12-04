import genRoutes from "../gen-routes"
import { RoutesCst } from '../cst'
export default function(){
    return {
        name:"DemoRoute",
        resolveId ( source ) {
            if (source === RoutesCst.vName) {
                console.log('resolvedId', source);
                return source; 
            }
            return null; 
        },
        load ( id ) {
            if (id === RoutesCst.vName) {
                console.log('load',id);
                const 
                routes = genRoutes(RoutesCst.routesPath,true),
                parsedRoutes = JSON.stringify(routes,null,4).replace(/"?##"?/g,""),
                code = `export const routes = ${parsedRoutes}`;
                return code
            }
            return null;
        }
    }
}