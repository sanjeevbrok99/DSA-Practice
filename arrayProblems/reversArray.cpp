#include<bits/stdc++.h>
using namespace std;

void reverse_array(int arr[],int start, int end){
    while(start < end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
int main (){
    int arr[] = {13,2,3,1,3,4,5,6,7,8};
    int n = sizeof(arr)/sizeof(arr[0]);
    cout << "befor revers";
    for(int i=0; i<n; i++)
    cout<< arr[i]<<"";
    cout<< "after"<<endl;
    reverse_array(arr,0,n-1);
    for(int i=0; i<n; i++)
    cout<< arr[i];
    return 0;
}