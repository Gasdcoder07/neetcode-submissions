class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        let group = {}

        for (let i = 0; i < strs.length; i++) {
            let llave = Array.from({ length: 26 }, () => 0)

            for (let j = 0; j < strs[i].length; j++) {
                let index = strs[i][j].charCodeAt(0) - 97
                llave[index]++
            }

            llave = llave.join(",")

            if (!group[llave]) {
                group[llave] = []
            }

            group[llave].push(strs[i])
        }

        let result = []

        for (const key of Object.keys(group)) {
            result.push(group[key])
        }

        return result

    }
}
