//let array1=[1,2,3,4,5,6,7,8,9,10]
//to get the odd number
//let odds=array1.filter(n=>n%2!==0)
//console.log(odds);
/*output
Array(5)
0: 1
1: 3
2: 5
3: 7
4: 9
*/
//convert the strings to title caps in a string array
//let fruits=['apple','banana','mango','orange']
//let upper=[]
//fruits.forEach(element=>{
  //       upper.push(element.toUpperCase());
    //   } 
//)
//console.log(upper);
/*output
0: "APPLE"
1: "BANANA"
2: "MANGO"
3: "ORANGE"
length: 4
*/
//sum of numbers in an array
//let array=[10,20,30,40,50]
//let sum=0;
//array.forEach(item=>{sum+=item})

//console.log(sum);
/*output
150*/
//return all prime numbers ina n array
//const newArray = [1, 3, 2, 5, 10];
//const isPrime = num => {
  //for (let i = 2; i < num; i++) {
    //if (num % i === 0) return false;
  //}
  //return num !== 1;
//};

//const myPrimeArray = newArray.filter(element => isPrime(element));
//console.log(myPrimeArray);
/*output
0: 3
1: 2
2: 5
*/
//return all palindromes in an array
const arr = [1453, 1344, 12321, 980, 565];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));
/*output
0: 12321
1: 565
length: 2*/