class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let cs1 = {}
        let cs2 = {}

        for (let i = 0; i < s.length; i++) {
            cs1[s[i]] = (cs1[s[i]] || 0) + 1
            cs2[t[i]] = (cs2[t[i]] || 0) + 1
        }

        for (const key in cs1) {
            if (cs1[key] !== cs2[key]) {
                return false
            }
        }
        return true
    }
}
