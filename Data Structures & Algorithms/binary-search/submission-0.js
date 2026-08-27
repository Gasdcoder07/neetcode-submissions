class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let inicio = 0;
        let fin = nums.length - 1
        let medio = 0

        while(inicio <= fin) {
            medio = inicio + Math.floor((fin - inicio) / 2)

            if (nums[medio] === target) return medio
            else if(nums[medio] > target) {
                fin = medio - 1
            } else {
                inicio = medio + 1
            }
        }
        return -1
    }
}
