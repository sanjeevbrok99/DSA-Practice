// Given a sorted array, arr[] consisting of N integers, the task is to find the frequencies of each array element.

// Examples: 

// Input: arr[] = {1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10} 
// Output: Frequency of 1 is: 3
//               Frequency of 2 is: 1
//               Frequency of 3 is: 2
//               Frequency of 5 is: 2
//               Frequency of 8 is: 3
//               Frequency of 9 is: 2
//               Frequency of 10 is: 1


#include <bits/stdc++.h>
using namespace std;

void getFrequency(vector<int>& arr,int n ){
    // Stores the frequency of an element
    int freq = 1;

    // Traverse the array arr[]
    for (int i = 1; i < n; i++) {

        // If the current element is equal
        // to the previous element
        if (arr[i] == arr[i - 1]) {

            // Increment the freq by 1
            freq++;
        }

        // Otherwise,
        else {
            cout << "Frequency of " << arr[i - 1]
                 << " is: " << freq << endl;
            // Update freq
            freq = 1;
        }
    }

    // Print the frequency of the last element
    cout << "Frequency of " << arr[n - 1] << " is: " << freq
         << endl;
}
int main()
{

    // Given Input
    vector<int> arr
        = { 1, 1, 1, 2, 3, 3, 5, 5, 8, 8, 8, 9, 9, 10 };
    int n = arr.size();

    // Function Call
    getFrequency(arr, n);
    return 0;
}