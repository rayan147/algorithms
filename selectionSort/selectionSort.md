### Selection Sort 
**Selection sort** idea is  that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted.



![Selection Sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

###### Lets declare a function 
we are declaring a function that takes in an unsorted array as a param
and return a sorted array .

```js
  const selectionSort=(arr)=>{
      return arr
  }
```
###### Lets loop thru the array 
this first loop is going to store the index of indexOfMin element

```js
  const selectionSort=(arr)=>{
      for(let i =0;i< arr.length; i++){
          let indexOfMin = i 
          for(let j=1; j<arr.length;j++){
              if (arr[indexOfMin] > arr[j]) {
              indexOfMin = j;
            }
          }
      }
      return arr
  }
```