#include<bits/stdc++.h>
using namespace std;

bool isSorted(int arr[], int n){
    int i,j;
    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[i])
            return false;
        }
    }
    return true;
}
int main(){
  int arr[]= {1,2,3,4,5,9,7,8};
  int n = sizeof(arr)/sizeof(arr[0]);
  if(isSorted(arr,n)==true){
    cout<< "Yes Array is sorted"<<endl;
  }
  else
  cout<< "Array is not sorted"<<endl;
}