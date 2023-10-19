// Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number. 

// Examples : 

// Input : arr = {2, 3, 10, 6, 4, 8, 1}
// Output : 8
// Explanation : The maximum difference is between 10 and 2.

#include<bits/stdc++.h>
using namespace std;

int maxDIfference(int arr[],int n){
    int max_diff = arr[0]-arr[1];
    for(int i=0;i<n;i++){
        for (int j = i+1;j<n;j++){
            if(arr[j]-arr[i]>max_diff)
               max_diff = arr[j]-arr[i];
            
    }
   
}
 return max_diff;
}
int main(){
    int arr[] = {2, 3, 10, 6, 4, 8, 1};
    int n = sizeof(arr)/sizeof(arr[0]);
    int x = maxDIfference(arr,n);
    cout <<"MaxDiifernce is :"<< x << endl;
    return 0;
}