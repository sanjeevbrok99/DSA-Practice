// Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 

// For example:

// Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// Output: 17, 5, 2


#include<bits/stdc++.h>
using namespace std;

void leaderArray(int arr[],int n){
    int max_from_right = arr[n-1];
    cout << max_from_right << " ";
    for(int i = n-2;i>=0;i--)
   { if(max_from_right<arr[i]){
        max_from_right = arr[i];

        cout << max_from_right << " ";
    }}
}

int main(){
    int arr[] = {45,64,23,2,4,5,3,5};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    leaderArray(arr,n);
    return 0;

}