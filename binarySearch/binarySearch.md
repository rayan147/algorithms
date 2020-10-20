###### Binary Search
Search a sorted array by repeatedly dividing the search interval in half Repeatedly check until the value is found or the interval is empty.

![Binary Search ](https://www.geeksforgeeks.org/wp-content/uploads/Binary-Search.png)

###### Lets declare a function 
it will take two args, a sorted array and a target.
this  binarySeach function will return the indexNumber of the target if found else it will return false.


```js
   const binarySeach =(arr,target){
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
   const binarySeach =(arr,target){
       let startIndex =0,
       let endIndex=arr.length -1

       return false 
   }
```
###### Lets make it a bit neatter
it really does not matter it is just preference. 
```js
   const binarySeach =(arr,target, startIndex =0,endIndex=arr.length -1){
       return false 
   }
```
###### Lets loop
I am going to use a while loop ,but you coud you any loop or recursion if you look 
it really does not matter it is just preference. 
we are going to loop while the endIndex is greater or equal to the start 

```js
   const binarySeach =(arr,target, startIndex = 0,endIndex = arr.length -1){
        while(startIndex <= endIndex){
          
        }
       return false 
   }
```