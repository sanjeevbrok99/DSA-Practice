/**
 * ============================================================================
 * BEST TIME TO BUY AND SELL STOCK - Problem Solution
 * ============================================================================
 * 
 * PROBLEM STATEMENT:
 * You are given an array prices where prices[i] is the price of a given stock 
 * on the ith day.
 * 
 * You want to maximize your profit by choosing a single day to buy one stock 
 * and choosing a different day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction. 
 * If you cannot achieve any profit, return 0.
 * 
 * EXAMPLES:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * 
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: No transactions done. Max profit = 0.
 * 
 * ============================================================================
 * KEY INSIGHT:
 * ============================================================================
 * Track the MINIMUM price seen so far (best buy price)
 * For each price, calculate profit if we sold today
 * Keep track of maximum profit
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * SOLUTION: Single Pass (O(n) - Most Efficient)
 * ============================================================================
 * 
 * APPROACH:
 * 1. Track minimum price seen so far (best time to buy)
 * 2. For each day:
 *    - Update minimum price if current is lower
 *    - Calculate profit if we sell today
 *    - Update maximum profit if current is better
 * 
 * STEP-BY-STEP EXAMPLE:
 * Input: prices = [7, 1, 5, 3, 6, 4]
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Day 0: price = 7
 * ──────────────────────────────────────────────────────────────────────
 * minPrice = min(Infinity, 7) = 7
 * profit = 7 - 7 = 0
 * maxProfit = max(0, 0) = 0
 * 
 * Best so far: Buy at 7, sell at 7, profit = 0
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Day 1: price = 1
 * ──────────────────────────────────────────────────────────────────────
 * minPrice = min(7, 1) = 1  (Better buy price!)
 * profit = 1 - 1 = 0
 * maxProfit = max(0, 0) = 0
 * 
 * Best so far: Buy at 1
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Day 2: price = 5
 * ──────────────────────────────────────────────────────────────────────
 * minPrice = min(1, 5) = 1
 * profit = 5 - 1 = 4  (If we sell today after buying at 1)
 * maxProfit = max(0, 4) = 4
 * 
 * Best so far: Buy at 1, sell at 5, profit = 4 ✓
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Day 3: price = 3
 * ──────────────────────────────────────────────────────────────────────
 * minPrice = min(1, 3) = 1
 * profit = 3 - 1 = 2
 * maxProfit = max(4, 2) = 4  (Keep previous max)
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Day 4: price = 6
 * ──────────────────────────────────────────────────────────────────────
 * minPrice = min(1, 6) = 1
 * profit = 6 - 1 = 5  (If we sell today!)
 * maxProfit = max(4, 5) = 5  (New best profit!)
 * 
 * Best so far: Buy at 1, sell at 6, profit = 5 ✓
 * 
 * ──────────────────────────────────────────────────────────────────────
 * Day 5: price = 4
 * ──────────────────────────────────────────────────────────────────────
 * minPrice = min(1, 4) = 1
 * profit = 4 - 1 = 3
 * maxProfit = max(5, 3) = 5  (Keep previous max)
 * 
 * FINAL: Maximum profit = 5 ✓
 * Buy on day 1 (price=1), sell on day 4 (price=6)
 * 
 * TIME COMPLEXITY: O(n)
 *   - Single pass through prices
 * 
 * SPACE COMPLEXITY: O(1)
 *   - Only use two variables
 * 
 * WHY IT'S EFFICIENT:
 * - No nested loops
 * - Single pass
 * - Optimal solution
 * 
 * ============================================================================
 */
function maxProfit(prices) {
    let minPrice = Infinity;  // Lowest price seen so far (best buy price)
    let maxProfit = 0;        // Best profit we can make
    
    for (let price of prices) {
        // Update minimum price if we found a better buy price
        if (price < minPrice) {
            minPrice = price;
        }
        
        // Calculate profit if we sold today after buying at minPrice
        const profitToday = price - minPrice;
        
        // Update maximum profit if today's profit is better
        if (profitToday > maxProfit) {
            maxProfit = profitToday;
        }
    }
    
    return maxProfit;
}

/**
 * ============================================================================
 * WHY THIS WORKS - THE INTUITION
 * ============================================================================
 * 
 * We need to buy BEFORE we sell.
 * - Track the minimum price we've seen (best buy opportunity)
 * - At each price, calculate: "What if I sold today?"
 * - Keep track of the best profit
 * 
 * Why track minimum?
 * - To maximize profit, we want to buy at lowest price
 * - For any sell price, profit = sell_price - min_buy_price
 * 
 * ============================================================================
 * IMPORTANT CONCEPTS
 * ============================================================================
 * 
 * 1. GREEDY APPROACH:
 *    - At each step, track the best buy price so far
 *    - Calculate profit for selling today
 *    - Keep the maximum profit
 * 
 * 2. SINGLE PASS:
 *    - Don't need to check all pairs
 *    - Track minimum as we go
 * 
 * 3. HANDLING NO PROFIT:
 *    - If prices only decrease, maxProfit stays 0
 *    - Example: [7,6,4,3,1] → profit = 0
 * 
 * ============================================================================
 */

// ============================================================================
// TEST CASES
// ============================================================================

console.log("=".repeat(60));
console.log("BEST TIME TO BUY AND SELL STOCK");
console.log("=".repeat(60));

console.log("\nTest Case 1:");
console.log("Input: [7,1,5,3,6,4]");
console.log("Output:", maxProfit([7,1,5,3,6,4]));
console.log("Expected: 5");

console.log("\nTest Case 2:");
console.log("Input: [7,6,4,3,1]");
console.log("Output:", maxProfit([7,6,4,3,1]));
console.log("Expected: 0");

// Export function
module.exports = { maxProfit };
