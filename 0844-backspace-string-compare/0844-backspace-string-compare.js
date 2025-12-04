/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let a = [];
    let b = [];
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] == "#") {
            a.pop()
        } else {
            a.push(s[i])
        }
    }
    for (let i = 0; i <= t.length - 1; i++) {
        if (t[i] == "#") {
            b.pop()
        } else {
            b.push(t[i])
        }
    }
    return a.join("") === b.join("");
};