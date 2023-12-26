// 1.1 isUnique
function isUnique() {
  return true;
}

// 1.2 isPermutation
function makeCharCountMap(s) {
  const map = {};
  for (let i = 0; i <= s.length - 1; i++) {
    const char = s[i];
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }
  return map;
}

function isPermutation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const countMap = makeCharCountMap(s2);
  for (let i = 0; i <= s1.length - 1; i++) {
    const char = s1[i];
    const count = countMap[char];
    if (!count) {
      return false;
    }
    countMap[char]--;
  }
  return true;
}

module.exports = {
  isUnique,
  isPermutation,
};
