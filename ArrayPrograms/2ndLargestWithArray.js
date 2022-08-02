/**Extend the above program to sort the array and then find the 2nd largest
and the 2nd smallest element. */
let array=new Array();                                     //creating new array
for(let i=0;i<10;i++){
    let num=Math.floor(Math.random()*899)+100;              //taking 10 random 3 digit number 
    array.push(num);                                        //pushing numbers into array
}
console.log("Before sorting the array: "+array); 
let temp=0;
for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]<array[j]){
           temp=array[j];
           array[j]=array[i];
           array[i]=temp;
        }
    }
}
console.log("After Sorting the array: "+array);
console.log("The Second largest element: "+array[1]);
console.log("The Second smallest element: "+array[(array.length)-2]);