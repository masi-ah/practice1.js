const number1=(input)=>{
  let result=0
 while ( input>0){
  result= result +( input % 10)
  input = ~~(input / 10)
 }
return result
}

console.log(number1(12))
console.log(number1(145))
console.log(number1(58))
   



const sum_factor=(number, price)=>{
 let sum = number * price
 if (sum>400){
 return (sum - (sum * 0.10)) +((0.09)*sum)
}
 else {
return sum +((0.09)*sum)
 }
}
console.log(sum_factor(3,100))
console.log(sum_factor(5,100))
console.log(sum_factor(12,100))