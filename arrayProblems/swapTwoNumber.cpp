// swap two numbers-
//#solution 1

#include<bits/stdc++.h>
using namespace std;

int swap_two_number(int *a,int *b){
        int temp;
        temp = *a,
        *a = *b;
        *b  = temp;
    return 0;
}
int main(){
    int a = 2, b = 3;
    cout << "befor swapping a = "<<a<<",b = "<<b<< endl;
    swap_two_number(&a,&b);
    cout << "after swapping a = "<<a<<",b = "<<b<< endl;
    return 0;
}
// Solution : 2
// int swap_two_number1(int a,int b){
//         int temp;
//         temp = a,
//         a = a;
//         b  = temp;
//     return 0;
// }
// int main1(){
//     int a = 2, b = 3;
//     cout << "befor swapping a = "<<a<<",b = "<<b<< endl;
//     swap_two_number1(a,b);
//     cout << "after swapping a = "<<a<<",b = "<<b<< endl;
//     return 0;
// }

//# solution: 3
// int main(){
//     int a = 3 , b = 5;
//     cout << "befor swapping a = " << a << " b = "  << b << endl;
//     swap(a, b);
//     cout << " after swapping a = " << a << " b = " << b << endl;
//     return 0;
// }