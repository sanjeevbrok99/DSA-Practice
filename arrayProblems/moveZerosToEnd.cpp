#include<iostream>
using namespace std;

void moveZeroToEnd(int arr[], int n)
{
    int i, count = 0;
    for(i = 0; i < n; i++){
        if(arr[i]!=0)
        arr[count++]=arr[i];
    }
    for(i = count; i < n; i++)
    arr[i] = 0;
}