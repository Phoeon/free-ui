export type ITreeKey = string|number
export type ITreeNode = {
    id:ITreeKey,
    text:string,
    children?:Array<ITreeNode>
}
export type ITree = Array<ITreeNode>
export type ITreeValue = ITreeKey|Array<ITreeKey>