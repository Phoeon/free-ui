import { ITree,ITreeNode,IKey } from './types'

export function searchPath(tree:ITree,id:IKey):ITreeNode[]{
    const len = tree.length
    for(let i=0;i<len;i++){
        const node = tree[i];
        if(node.id===id)return [node]
        else if(node.children&&node.children.length) {
            const res = searchPath(node.children,id)
            if(res.length)return [node,...res]
        }
    }
    return []
}
export function searchNodeById(tree: ITree, id: IKey): ITreeNode | null{
    const len = tree.length
    for(let i=0;i<len;i++){
        const node = tree[i]
        if (node.id === id) return node;
        if (node.children) {
            const res = searchNodeById(node.children, id)
            if(res)return res
        }
    }
    return null
}
export function getChildNodes(node:ITreeNode){
    let res = [node]
    if(node.children){
        node.children.forEach((n:ITreeNode)=>{
            res = res.concat(getChildNodes(n))
        })
    }
    return res
}
export function getLeafNodes(node:ITreeNode){
    let res:ITreeNode[] = []
    if(node.children){
        node.children.forEach((n:ITreeNode)=>{
            res = res.concat(getLeafNodes(n))
        })
    }else res.push(node)
    return res
}
export function getChildNodesById(tree:ITree,id:IKey){
    const target = searchNodeById(tree,id)
    return target?getChildNodes(target):[]
}
export function getLeafNodesById(tree:ITree,id:IKey){
    const target = searchNodeById(tree,id)
    return target?getLeafNodes(target):[]
}
export function getNodesByIds(tree:ITree,ids:Array<IKey>){
    let res:Array<ITreeNode> = []
    for(let i=0;i<tree.length;i++){
        const node = tree[i]
        if(ids.includes(node.id)){
            res.push(node)
            ids = ids.filter(k=>k!=node.id)
        }
        if(node.children&&node.children.length)
        res = [...res,...getNodesByIds(node.children,ids)]
    }
    return res
}
export function getNodesNameByIds(tree:ITree,ids:Array<IKey>){
    return getNodesByIds(tree,ids).map(node=>node.text)
}