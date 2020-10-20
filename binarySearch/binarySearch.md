### Binary Search
Search a sorted array by repeatedly dividing the search interval in half Repeatedly check until the value is found or the interval is empty.

![Binary Search ](https://www.geeksforgeeks.org/wp-content/uploads/Binary-Search.png)
[Image belongs to www.geeksforgeeks ](https://www.geeksforgeeks.org/binary-search/)
###### Lets declare a function 
it will take two args, a sorted array and a target.
this  binarySeach function will return the indexNumber of the target if found else it will return false.
we are searching for **23**

```js
   const binarySeach =(arr,target)=>{
       return false 
   }
```
###### Lets declare two pointers 
startIndex will start at the index 0 and 
endIndex will be the last index 

```js
const mySortedArray =[2,5,8,12,16,23,38,56,72,91]
```
in the beginging startIndex = 2 and endIndex =91
```js
   const binarySeach =(arr,target)=>{
       let startIndex =0
       let endIndex=arr.length -1

       return false 
   }
```
###### Lets make it a bit neatter
it really does not matter it is just preference. 
```js
   const binarySeach =(arr,target, startIndex =0,endIndex=arr.length -1)=>{
       return false 
   }
```
###### Lets loop
I am going to use a while loop ,but you coud  use any loop or recursion if you would like .
we are going to loop while the endIndex is greater or equal to the start 

```js
   const binarySeach =(arr,target, startIndex = 0,endIndex = arr.length -1)=>{
        while(startIndex <= endIndex){
          
        }
       return false 
   }
```
###### Lets find the middle 
when need to find the middle of the array to the determine if our guess is greater or less than that other have of the array . if you need visual please look a the image above or [link to Youtube!](https://www.youtube.com/watch?v=iP897Z5Nerk&ab_channel=AlgoRythmics)

```js
   const binarySeach =(arr,target, startIndex = 0,endIndex = arr.length -1)=>{
        while(startIndex <= endIndex){
          let middleIndex = Math.floor((startIndex + endIndex) / 2 )
        }
       return false 
   }
```
###### Lets find where our target is 
if the target is at the middle of the array ; we will return that 
let's write that 

```js
   const binarySeach =(arr,target, startIndex = 0,endIndex = arr.length -1)=>{
        while(startIndex <= endIndex){
          let middleIndex = Math.floor((startIndex + endIndex) / 2 )
          if(arr[middlexIndex} === target ){
           return console.log(`Target was found at index ${middleIndex}`);
          }
          
        }
       return false 
   }
```

if is the the middle ,we check if the target is greater than the middle ,
and if is. we move are startIndex to be the previous middle + 1
so in this case the startIndex would be index 8,middleIndex index 7 and endIndex index 9 .

```js
  const binarySeach=(arr,target, startIndex =0,endIndex=arr.length -1)=>{
  
  
      while (startIndex <= endIndex) {
        let  middleIndex = Math.floor((startIndex + endIndex) / 2 )
          if(arr[middleIndex] === target){
              return  console.log(`Target was found at index ${middleIndex}`);
          }else if(arr[middleIndex] < target){
              startIndex =middleIndex ++
          } else{
              endIndex =middleIndex --
          } 
      }
    return false 
}
```
###### Small improvements 
let's declare the middle variable outside of the while loop ,so we dont have create a new variable everytime we loop . 😎
```js
   const binarySeach=(arr,target, startIndex =0,endIndex=arr.length -1)=>{
  
    let  middleIndex
      while (startIndex <= endIndex) {
          middleIndex = Math.floor((startIndex + endIndex) / 2 )
          if(arr[middleIndex] === target){
              return  console.log(`Target was found at index ${middleIndex}`);
          }else if(arr[middleIndex] < target){
              startIndex =middleIndex ++
          } else{
              endIndex =middleIndex --
          } 
      }
    return false 
}
```