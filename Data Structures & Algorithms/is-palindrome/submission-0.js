class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        s = s.toLowerCase().replace(/[^a-z0-9]/g, "")

        for (let i = 0; i < s.length / 2; i++) {
            let left = s[i]
            let right = s[s.length - 1 - i]
            if (left !== right) return false
        }
        return true
    }
}
