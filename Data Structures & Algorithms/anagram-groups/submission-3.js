class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {}

        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split('').sort().join('')
            if (!group[key]) {
                group[key] = []
            }
            group[key].push(strs[i]);
        }

        return Object.values(group)
    }
}
