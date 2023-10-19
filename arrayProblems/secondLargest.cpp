//Given an array of integers, our task is to write a program that efficiently finds the second largest element present in the array. 
// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.
// Explanation: The largest element of the 
// array is 35 and the second 
// largest element is 34
#include<bits/stdc++.h>
using namespace std;


// returns the index of second largest
// if second largest didn't exist return -1
// int secondLargest(int arr[], int n) {
// 	int first = 0, second = -1;
// 	for (int i = 1; i < n; i++) {
// 		if (arr[i] > arr[first]) {
// 			second = first;
// 			first = i;
// 		}
// 		else if (arr[i] < arr[first]) {
// 			if (second == -1 || arr[second] < arr[i])
// 				second = i;
// 		}
// 	}
// 	return second;
// }

// int main() {
// 	int arr[] = {10, 12, 20, 4};
// 	int index = secondLargest(arr, sizeof(arr)/sizeof(arr[0]));
// 	if (index == -1)
// 		cout << "Second Largest didn't exist";
// 	else
// 		cout << "Second largest : " << arr[index];
// }

int second_largest(int arr[],int n){
    int largest, second_largest;
    for (int i = 0; i < n;i++) {

        largest = second_largest = INT_MIN;

        if(largest<arr[i]){
            second_largest = largest;
            largest = arr[i];
        }
        else if(arr[i]<largest&&arr[i]>second_largest){
            second_largest = arr[i];
        }
       
    }
     return second_largest;
}
int main(){
    int arr[] = {34,54,4,354,33,22};
    int n = sizeof(arr)/sizeof(arr[0]);
    int result = second_largest(arr,n);
    cout << "Second Largest is: " << result<< endl;
    return 0;
}