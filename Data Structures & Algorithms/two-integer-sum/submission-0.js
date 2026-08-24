class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sums = {}

        for (let i = 0; i < nums.length; i++) {

            let resto = target - nums[i]

            if (sums[resto] !== undefined) {
                return [sums[resto], i]
            }
            sums[nums[i]] = i
        }

        return false
    }
}
