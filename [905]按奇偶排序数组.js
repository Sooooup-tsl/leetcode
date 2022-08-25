//给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。 
//
// 返回满足此条件的 任一数组 作为答案。 
//
// 
//
// 示例 1： 
//
// 
//输入：nums = [3,1,2,4]
//输出：[2,4,3,1]
//解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
// 
//
// 示例 2： 
//
// 
//输入：nums = [0]
//输出：[0]
// 
//
// 
//
// 提示： 
//
// 
// 1 <= nums.length <= 5000 
// 0 <= nums[i] <= 5000 
// 
//
// Related Topics 数组 双指针 排序 👍 327 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  // let result = []
  // for(var i=0;i<nums.length;i++) {
  //   if(nums[i] %2==0) {
  //     result.unshift(nums[i])
  //   } else {
  //     result.push(nums[i])
  //   }
  // }
  //
  // return result

  let left = 0
  let right = nums.length-1
  while (left<right) {

    if (nums[right] % 2 ==0 && nums[left] % 2 == 1){
      let temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
    }
    if(nums[left] % 2 == 0) {
      left++
    }
    if(nums[right] % 2 == 1) {
      right--
    }
  }

  return  nums
};
//leetcode submit region end(Prohibit modification and deletion)
