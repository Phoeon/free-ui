export interface ITreeNode {
    id:string,
    text:string,
    icon?:string,
    action?:string,
    children?:Array<TreeNode>
}