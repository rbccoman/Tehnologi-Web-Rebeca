const calculeazaMedia = (numbers) => {
    if (numbers.length === 0) return 0 


    const suma = numbers.reduce((acc, curr) => acc + curr, 0)


    return suma / numbers.length
}
const numbers = [10, 20, 30, 40, 50]

console.log(calculeazaMedia(numbers)) 

