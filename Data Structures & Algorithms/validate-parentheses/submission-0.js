class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parenthesis = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        let stack = []

        for (let i = 0; i < s.length; i++) {
            if (s[i] in parenthesis) {
                if (stack[stack.length - 1] !== parenthesis[s[i]])
                    return false
                else
                    stack.pop()
            } else {
                stack.push(s[i])
            }
        }
        return stack.length === 0
    }
}
