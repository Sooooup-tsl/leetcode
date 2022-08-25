//给定两个字符串 s 和 t ，它们只包含小写字母。 
//
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。 
//
// 请找出在 t 中被添加的字母。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "abcd", t = "abcde"
//输出："e"
//解释：'e' 是那个被添加的字母。
// 
//
// 示例 2： 
//
// 
//输入：s = "", t = "y"
//输出："y"
// 
//
// 
//
// 提示： 
//
// 
// 0 <= s.length <= 1000 
// t.length == s.length + 1 
// s 和 t 只包含小写字母 
// 
//
// Related Topics 位运算 哈希表 字符串 排序 👍 339 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let map = new Map()
  for(var i = 0;i<s.length;i++) {
    let count = 1
    if(map.has(s[i])) {
      count = map.get(s[i])
      count++
    }

    map.set(s[i], count)
  }
  for(var i = 0;i<t.length;i++) {
    let count = 1
    if(map.has(t[i])) {
      count = map.get(t[i])
      count--
      if (count < 0) {
        return t[i]
      } else {
        map.set(t[i], count)
      }
    } else {
      return t[i]
    }
  }
};
//leetcode submit region end(Prohibit modification and deletion)
