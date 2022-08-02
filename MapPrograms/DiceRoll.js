/**Write a program in the following steps
a. Roll a die and find the number between 1 to 6
b. Repeat the Die roll and find the result each time
c. Store the result in a dictionary
d. Repeat till any one of the number has reached 10 times
e. Find the number that reached maximum times and the one that was for
minimum times */
let array=new Array();
var count1=0,count2=0,count3=0,count4=0,count5=0,count6=0,count=0;
while(count!=10){
    let dice=Math.floor(Math.random()*6)+1;
    switch(dice){
        case 1: count1++;
        if(count<count1){
            count=count1;
        }
        break;
        case 2: count2++;
        if(count<count2){
            count=count2;
        }
        break;
        case 3: count3++;
        if(count<count3){
            count=count3;
        }
        break;
        case 4: count4++;
        if(count<count4){
            count=count4;
        }
        break;
        case 5: count5++;
        if(count<count5){
            count=count5;
        }
        break;
        case 6: count6++;
        if(count<count6){
            count=count6;
        }
        break;
    }
}
array.push(count1);
array.push(count2);
array.push(count3);
array.push(count4);
array.push(count5);
array.push(count6);
console.log(array);
let maxElementPosition=0,minElementPosition=0,maxElement=0,minElement=10;
for(let i=0;i<array.length;i++){
    if(maxElement<array[i]){
    maxElement=array[i];
    maxElementPosition=i;
    }
    if(minElement>array[i])
    {
        minElement=array[i];
        minElementPosition=i;
    }
}
console.log("Max number of the dice rolled: "+(maxElementPosition+1));
console.log("Min number of the dice rolled: "+(minElementPosition+1));