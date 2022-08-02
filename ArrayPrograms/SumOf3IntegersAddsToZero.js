/**Write a Program to show Sum of three Integer adds to ZERO */
const prompt=require("prompt-sync")();
var size=parseInt(prompt("Enter size of the array: "));
let array=new Array();
for(let i=0;i<size;i++){
    var element=parseInt(prompt("Enter element: "));
    array.push(element);
}
console.log(array);
let count=0;
for(let i=0;i<size-2;i++){
   for(let j=i+1;j<size-1;j++){
    for(let k=j+1;k<size;k++){
        if(array[i]+array[j]+array[k]==0){
            console.log("elements are: "+array[i]+", "+array[j]+", "+array[k]);
            count++;
        }
    }
   }
}
if(count==0){
    console.log("no such elements found!");
}