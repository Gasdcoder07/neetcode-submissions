class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let resultado = 0;

        for (const num of nums) {
            resultado ^= num
        }
        return resultado
    }
}
