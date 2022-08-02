/**Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array. */
let array=new Array();                                     //creating new array
for(let i=0;i<10;i++){
    let num=Math.floor(Math.random()*899)+100;              //taking 10 random 3 digit number 
    array.push(num);                                        //pushing numbers into array
}
console.log(array);                                         //printing the array
let largest=100;                                            //defining largest element as 999
let smallest=999;                                           //defining smallest element as 100
let secondLargest=100;                                      //defining second largest element as 100
let secondSmallest=999;                                     //defining second smallest element as 999
for (i=0;i<array.length;i++){  
    let element = array[i];                            
    if(element>largest)                                   //finding the largest element in the array
        largest = element;
    
    if(element<smallest)                                  //finding the smallest element in the array
        smallest = element;
    
}
console.log("largest: "+largest);
console.log("smallest: "+smallest);
for(i = 0; i < array.length;i++){
    let element = array[i];
    if(element < largest && element > secondLargest )          //finding second largest element
        secondLargest = element;
    
    if(element > smallest && element < secondSmallest)         //finding second smallest element
        secondSmallest = element;
    
}
console.log("The Second Largest number in the array is: "+secondLargest);
console.log("The Second Smallest number in the array is: "+secondSmallest);