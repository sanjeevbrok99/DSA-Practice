#include <iostream>
#include <cmath>
using namespace std;

// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

// Examples:  

// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

// void reverse(int arr[], int start, int end){
//     while(start < end){
//         swap(arr,start,end);
//         start++;
//         end--;
//     }
// }

// void leftRotate(int arr[],int d, int n){
//     reverse(arr,0,d-1);
//     reverse(arr,d-1,n-1);
//     reverse(arr,0,n-1);
// }

// int main(){
//     int arr[]= {1, 2, 3, 4, 5, 6, 7};
//     int n = sizeof(arr)/sizeof(arr[0]);
//     int start = 0,end = n-1, d= 2;
//     cout <<"before rotation" << endl;
//     for(int i = 0 ; i < n ; i++)
//     cout<< arr[i] << endl;
//     leftRotate(arr,d,n);
//     cout<< "after rotation" << endl;
//         for(int i = 0 ; i < n ; i++)
//     cout<< arr[i]<<endl;

// }

// solution 2;

void leftRotate(int arr[], int d, int n)
{
	int temp[d];

	for(int i = 0; i  < d; i++)
	{
		temp[i] = arr[i];
	}

	for(int i = d; i  < n; i++)
	{
		arr[i - d] = arr[i];
	}

	for(int i = 0; i  < d; i++)
	{
		arr[n - d + i] = temp[i];
	}	
}
 
int main() {
	
      int arr[] = {1, 2, 3, 4, 5}, n = 5, d = 2;

      cout<<"Before Rotation"<<endl;

       for(int i = 0; i < n; i++)
       {
       		cout<<arr[i]<<" ";
       }

       cout<<endl;

       leftRotate(arr, d, n);

       cout<<"After Rotation"<<endl;

       for(int i = 0; i < n; i++)
       {
       		cout<<arr[i]<<" ";
       }
    
}