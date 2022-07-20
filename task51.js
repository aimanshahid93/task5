//a)finding the odd numbers in an array
//declaring an array
//let array1=[1,2,3,4,5,6,7,8,9,10];
//let oddarray=[];
//for(let i=0;i<array1.length;i++){
  //  if(array1[i]%2!==0)
  //  {
  //      oddarray.push(array1[i]);
        
   // }
//}
//console.log(oddarray);
/*output array
[1,3,5,7,9]
*/

//b)to convert the lowercase str array to uppercase
//var lower=['apple','banana','kiwi'];
//var upper=[];

//lower.forEach(element=>{
  //  upper.push(element.toUpperCase());
 //} );
  //  console.log(upper);
/*output
['APPLE','BANANA','KIWI']
*/


//c)sum of all numbers in the array
//let array1=[10,20,30,40,50,60,70,80,90,100];
//let sum=0;
//for( let i=0;i<array1.length;i++)
//{
 //   sum+=array1[i];
//}

    //console.log(sum);
    /*output
    550
    */
   //d)return prime numbers in an array
 //  let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
//let result = [];
//function isPrime(num) {
  //if(num < 2) return false;

  //for (let k = 2; k < num; k++){
    //if(num % k == 0){
      //return false;
    //}
  //}
  //return true;
//}
//num.forEach(function (element) {
 // const item = isPrime(element);
  //if (item) {
    //result.push(element);
  //}
//});
//console.log(result); 
/*ouput
[ 2, 3, 5, 7, 11, 13, 17, 19]
*/
//e)return all palindromes isn an array
    // Javascript implementation to check
    // if an array is PalinArray or not
     
    // Function to check if palindrome or not
    //let palindromeArray = (arr) => {
        //initialize to true
        //let isPalindrome = true;
        
        //loop through half length of the array
       // for(let i = 0; i < arr.length / 2; i++) {
   
            //check if first half is equal to the second half
         //   if(arr[i] !== arr[arr.length - i - 1]){
           //   isPalindrome = false; 
             // break;
            //}
        //}
        
        //return isPalindrome;
   //}
   //console.log(palindromeArray(91,2,2,1));
   /*output
   true
   */
  //f)return medians of two arrays of same size
  //to find the medians of arr1
 // const median = (a1, a2) => {
   // let x = a1.concat(a2);
    //x.sort(function (a,b) {
      //return a - b;
    //});
    //let len = x.length;
    
    //return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  //}
  
  //let a = [10,20,34,56];
  //let b = [5,10,11,12];
  //console.log(median(a,b));
  /*output
  11.5
  */
 //g)remove duplicates from an array
 let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});
/*output
0: "A"
1: "B"
2: "C"
*/
//H)rotate the array k times
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
RightRotate(Array, N, K);
function RightRotate(a, n, k)
{
  
    // If rotation is greater
    // than size of array
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
            // Printing rightmost
            // kth elements
            document.write(a[n + i - k] + " ");
        }
        else {
  
            // Prints array after
            // 'k' elements
            document.write((a[i - k]) + " ");
        }
    }
    document.write("<br>");
}

console.log(uniqueChars);
/*output
4 5 1 2 3
*/