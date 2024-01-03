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

// 1.3 URLify
function URLifyBuiltIn(s, len) {
  return s.slice(0, len).replaceAll(" ", "%20");
}

function URLify(s, len) {
  const charArr = s.split("");
  const newURL = [];
  for (let i = 0; i < len; i++) {
    if (charArr[i] === " ") {
      newURL[i] = "%20";
    } else {
      newURL[i] = charArr[i];
    }
  }
  return newURL.join("");
}

// 1.4 Palindrome Permutation
// could also check this as we go along making the character count map

function checkPalindromePermutation(s) {
  // if you want to be really safe, check that this value is a string
  if (!s) {
    return false;
  }
  const normalizedString = s.replace(/\s/g, "").toLowerCase();
  const isEven = normalizedString % 2 === 0;
  let pivotFound = isEven;

  const countMap = makeCharCountMap(normalizedString);
  const counts = Object.values(countMap);
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] % 2 === 1) {
      if (pivotFound) {
        return false;
      }
      pivotFound = true;
    }
  }
  return true;
}

function sumCountMap(map) {
  let count = 0;
  for (const val of Object.values(map)) {
    count += val;
  }
  return count;
}

// 1.5 oneAway

// I did not need to do all the count map stuff I could have just compared indeces using
// two pointers and returned false when the pointers separated by more than one
// or if I found more than one difference in the strings for a replacement
// may want to revisit this as 2 pointers is a common solution method
// but this solution still works and still runs in O(n) time where n is length of the shorter string
// mine does use O(n) space tho and the other does not.
function oneAway(a, b) {
  if (Math.abs(a.length - b.length) > 1) {
    return false;
  }

  const long = a.length >= b.length ? a : b;
  const short = long === a ? b : a;

  const countMapLong = makeCharCountMap(long);
  const countMapShort = makeCharCountMap(short);

  for (let i = 0; i < long.length; i++) {
    const char = long[i];
    if (countMapShort[char]) {
      countMapShort[char] = Math.abs(countMapShort[char] - countMapLong[char]);
      countMapLong[char] = 0;
    }
  }
  return sumCountMap(countMapLong) + sumCountMap(countMapShort) <= 2;
}

// 1.6 String Compression
function compressString(s) {
  if (!s) {
    return "";
  }

  let compressed = s[0];
  let current = s[0];
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    // check if our compressed string will match or exceed the original strings length
    if (compressed.length >= s.length - 1) {
      return s;
    }

    if (s[i] === current) {
      count++;
    } else {
      current = s[i];
      compressed = compressed + count + current;
      count = 1;
    }

    // append count if we are on the last character
    if (i === s.length - 1) {
      compressed = compressed + count;
    }
  }

  return compressed;
}

module.exports = {
  isUnique,
  isPermutation,
  URLifyBuiltIn,
  URLify,
  checkPalindromePermutation,
  oneAway,
  compressString,
};
