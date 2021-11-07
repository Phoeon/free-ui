export interface ITreeNode {
    id:string,
    name:string,
    icon?:string,
    action?:string,
    children?:Array<TreeNode>
}