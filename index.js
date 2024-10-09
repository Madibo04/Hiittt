// let name = "Tolani Aladelaja"
// let age = 32
// let height = 6.2
// const gender = "F" 
// let isMarried = false
// if(gender == "F"){
//     if(isMarried == true){
//         console.log(`Dear Mrs ${name}, Welcome Home`)
//     }
//     else{
//         console.log(`Dear Miss ${name}, Welcome Home`)
//     }
// }
// else if(gender == "M"){
//     console.log(`Dear Mr ${name}, Welcome home`)
// }
// else{
//     console.log("Sorry, Invalid Gender")
// }
for(let i = 1; i <= 100; i+=1){
    if(i % 15==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}