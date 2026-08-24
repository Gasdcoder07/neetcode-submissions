class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let currMin = prices[0];
        let biggestGap = 0;
    
        for (let price of prices) {
            if (price < currMin) {
                currMin = price;
            } else {
                let curr = price - currMin;
                if (curr > biggestGap) {
                    biggestGap = curr
                }
            }
        }
        return biggestGap
    }
}
