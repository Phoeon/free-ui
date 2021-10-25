export function searchPath(tree:any[],id:any):undefined|any[]{
    const len = tree.length
    for(let i=0;i<len;i++){
        const node = tree[i];
        if(node.id==id)return [node]
        else if(node.children&&node.children.length) {
            const res = searchPath(node.children,id)
            if(res)return [node,...res]
        }
    }
}