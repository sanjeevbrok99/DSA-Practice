#include<bits/stdc++.h>
using namespace std;

int largestElement(int arr[],int n){
    int i , j;
    for(i=0;i<n;i++){
        bool flag = true;
            for(j = 0;j<n;j++){
              if  (arr[j]>arr[i]){
                 flag = false;
              };
              return flag = true;
                
    }
}
}