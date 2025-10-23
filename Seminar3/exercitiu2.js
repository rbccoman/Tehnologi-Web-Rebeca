const getDivisibleSum = (numbers, divisor) => {
   
    const divisibleNumbers = numbers.filter((num) => {
        return num % divisor === 0
    })

   
    return divisibleNumbers.reduce((prev, current) => {
        return prev + current
    }, 0)
}

const numbers = [10, 15, 20, 22, 30, 33, 40]
const divisor = 5

const result = getDivisibleSum(numbers, divisor)
console.log("result:", result)
