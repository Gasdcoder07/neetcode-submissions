class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAmount = 0;
        let left = 0
        let right = heights.length - 1

        while(right > left) {
            let currAmount = ((heights[left] > heights[right] ? heights[right] : heights[left]) * (right - left))
            if (currAmount > maxAmount) maxAmount = currAmount

            if (heights[left] > heights[right]) right--
            else left++

        }

        return maxAmount
    }
}
