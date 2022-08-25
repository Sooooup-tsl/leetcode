//给定二叉树的根节点 root ，返回所有左叶子之和。 
//
// 
//
// 示例 1： 
//
// 
//
// 
//输入: root = [3,9,20,null,null,15,7] 
//输出: 24 
//解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
// 
//
// 示例 2: 
//
// 
//输入: root = [1]
//输出: 0
// 
//
// 
//
// 提示: 
//
// 
// 节点数在 [1, 1000] 范围内 
// -1000 <= Node.val <= 1000 
// 
//
// 
//
// Related Topics 树 深度优先搜索 广度优先搜索 二叉树 👍 491 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {


  function treeHelper (root) {
    let count = 0
    if (root.left !== null) {
      count += isLeafNode(root.left) ? root.left.val : treeHelper(root.left)
    }
    if (root.right !== null && !isLeafNode(root.right)) {
      count += treeHelper(root.right)
    }

    return count
  }
  function  isLeafNode(node){
    return node.left == null && node.right == null
  }
  return root != null ?treeHelper(root):0

};
//leetcode submit region end(Prohibit modification and deletion)
