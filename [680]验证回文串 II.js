var validPalindrome = function(s) {
  let left = 0
  let right = s.length-1

  while(left < right) {
    if(s[left] !== s[right]) {
      return check(s, left+1,right) || check(s, left, right-1)
    } else {
      left++
      right--
    }
  }

  return true
};

check = (s,l,r) => {
  for(var i=l,j=r;i<j;i++,j--) {
    if(s[i] != s[j]) return false
  }

  return true
}
