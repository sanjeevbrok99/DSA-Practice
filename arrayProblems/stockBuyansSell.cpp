// The cost of a stock on each day is given in an array. 
//Find the maximum profit that you can make by buying and selling on those days. If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.

// Examples:

// Input: arr[] = {100, 180, 260, 310, 40, 535, 695}
// Output: 865
// Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210
//                        Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655
//                        Maximum Profit  = 210 + 655 = 865

#include <bits/stdc++.h>
using namespace std;

int maxProfit(int arr[], int n)
{
    int max_profit = 0;
    for (int i = 1; i < n; i++)
    {
        if (arr[i] > arr[i - 1])
            max_profit = max_profit + arr[i] - arr[i - 1];
        cout << "max_profit: " << max_profit << endl;
    }
    return max_profit;
}

int main()
{
    int arr[] = {100, 180, 260, 310, 40, 535, 695};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Maximum profit is : " << maxProfit(arr, n) << endl;

    return 0;
}