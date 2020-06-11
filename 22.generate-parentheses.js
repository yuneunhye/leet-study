/**
 * @param {number} n
 * @return {string[]}
 * refer to https://leetcode.com/problems/generate-parentheses/discuss/433898/JavaScript-Backtracking
 */
var generateParenthesis = function (n) {
    let res = []
    function go(l, r, s) {
        if (l > r) return
        if (l == 0 && r == 0) {
            res.push(s)
            return
        }
        if (l > 0) go(l - 1, r, s + "(")
        if (r > 0) go(l, r - 1, s + ")")
    }
    go(n, n, '')
    return res
};