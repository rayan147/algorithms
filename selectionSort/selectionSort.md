### Selection Sort 
**Selection sort** idea is  that you loop through the input array linearly, selecting the first smallest element, and then swap it to the first position. Then you loop through the array again using a linear scan and get the second smallest element, swap it to the second position, and so on and so forth until your array is completely sorted.



![Selection Sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)
[link to Youtube!](https://www.youtube.com/watch?v=Ns4TPTC8whw&ab_channel=AlgoRythmics)
###### Lets declare a function 
we are declaring a function that takes in an unsorted array as a param
and return a sorted array .

```js
  const selectionSort=(arr)=>{
      return arr
  }
```
###### Lets loop thru the array 
this first loop is going to store the index of indexOfMin element.
we comapre the first index with the second and check if the second is smallest if it is we make indexOfMin = j;

```js
  const selectionSort=(arr)=>{
      for(let i =0;i< arr.length; i++){
          let indexOfMin = i 
          for(let j=i+1; j<arr.length;j++){
              if (arr[indexOfMin] > arr[j]) {
              indexOfMin = j;
            }
          }
      }
      return arr
  }
```
###### Lets swap
we are now swapping not matter what .

```js
  const selectionSort=(arr)=>{
      for(let i =0;i< arr.length; i++){
          let indexOfMin = i 
          for(let j=i+1; j<arr.length;j++){
              if (arr[indexOfMin] > arr[j]) {
              indexOfMin = j;
            }
          }
       
            // is like saying const [a, b] = [30, 40]
          [arr[ i ],arr[indexOfMin]]= [arr[indexOfMin],arr[ i ]];
      }
      return arr
  }
```


###### Lets swap small fix
we are now swapping not matter what even if 0 is the first index we still swap so we could add a if statemennt to check i !== indexOfMin and wrap are swapping inside

```js
  const selectionSort=(arr)=>{
      for(let i =0;i< arr.length; i++){
          let indexOfMin = i 
          for(let j=i+1; j<arr.length;j++){
              if (arr[indexOfMin] > arr[j]) {
              indexOfMin = j;
            }
          }
            if(i !== indexOfMin){
   // is like saying const [a, b] = [30, 40]
          [arr[ i ],arr[indexOfMin]]= [arr[indexOfMin],arr[ i ]];
            }
         
      }
      return arr
  }
```

###### lets add a swap function to pretend I am smarter then what I am 🧐
also let change to a for of just becuase 

```js
 const selectionSort=(arr)=>{
const swap = (arr,firstIndex,secondIndex) => ([arr[firstIndex],arr[secondIndex]]= [arr[secondIndex],arr[ firstIndex]])
    for(let i of arr.keys()){
        let indexOfMin = i 
        for(let j=i+1; j<arr.length;j++){
            if (arr[indexOfMin] > arr[j]) {
            indexOfMin = j;
          }
        }
          if(i !== indexOfMin) swap(arr,i,indexOfMin)    
          
    }
    return arr
}
```
###### Invocation
```js
const my_unsortedArray = [4,52,5,2,67,45,12]
const ss =selectionSort(my_unsortedArray);
console.log(ss)
```