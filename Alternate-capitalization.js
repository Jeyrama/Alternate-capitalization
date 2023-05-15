/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. Index 0 will be considered even.
The input will be a lowercase string with no spaces.

For example:
 capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
*/


// Solution

function capitalize(s) {
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
}

// or

function capitalize(s) {
  const S = s.toUpperCase()
  let a = ""
  let b = ""
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      a += s[i]
      b += S[i]
    } else {
      a += S[i]
      b += s[i]
    }
  }
  return [a, b]
}