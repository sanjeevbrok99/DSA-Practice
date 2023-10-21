//  Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let count = 0;
let mf = 1;
let item;
  for(let i =0;i<arr1.length;i++){
    for(let j=i;j<arr1.length;j++){
      if(arr1[j]==arr1[i])

      count++;
      if(mf<count)
      {
          mf = count
          item = arr1[i]
      console.log(`${item} ( ${mf} times ) `) ;

      }
    }
          count = 0

  }

console.log(`${item} ( ${mf} times ) `) ;
