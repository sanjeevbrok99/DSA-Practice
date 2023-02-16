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
int secondLargest(int arr[], int n) {
	int first = 0, second = -1;
	for (int i = 1; i < n; i++) {
		if (arr[i] > arr[first]) {
			second = first;
			first = i;
		}
		else if (arr[i] < arr[first]) {
			if (second == -1 || arr[second] < arr[i])
				second = i;
		}
	}
	return second;
}

int main() {
	int arr[] = {10, 12, 20, 4};
	int index = secondLargest(arr, sizeof(arr)/sizeof(arr[0]));
	if (index == -1)
		cout << "Second Largest didn't exist";
	else
		cout << "Second largest : " << arr[index];
}