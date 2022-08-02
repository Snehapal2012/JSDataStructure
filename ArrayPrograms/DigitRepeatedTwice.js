/**Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
etc and store them in an array */
let array=new Array();
var p=0;
var q=0;
for(let i=1;i<=100;i++){
    if(i>=10){
        p=parseInt(i%10);
        q=parseInt(i/10);
        if(p==q){
            array.push(i);
        }
    }
}
console.log(array);