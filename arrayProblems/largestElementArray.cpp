#include <bits/stdc++.h>
using namespace std;

// Given an array arr of size N, the task is to find the largest element in the given array. 

// Example: 

// Input: arr[] = {10, 20, 4}
// Output: 20

// Input : arr[] = {20, 10, 20, 4, 100}
// Output : 100

// solution: 2
int getlargest(int arr[], int n)
{
    for (int i = 0; i < n; ++i) {
        bool flag = true;
        for (int j = i; j < n; ++j) {
            if (arr[j] > arr[i]) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            return arr[i];
        }
    }

    return -1;
}
int main()
{
    int arr[] = { 5, 8, 20, 15 };
    cout << "Largest in given array is "
         << getlargest(arr, 4);
    return 0;
}

//#solution:2
int largestElement(int arr[],int n){
    int i;
    int largest = arr[0];
    for (i=0;i<n;i++){
        if(arr[i]>largest)
            largest = arr[i];
        
        
    }

return largest;
}
 int main(){
    int n;
    int arr[] = {46,67,5,4,44};
    n = sizeof(arr)/sizeof(arr[0]);
    cout << largestElement(arr,n);

    
 }