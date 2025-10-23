const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord = "crocodile"
const minLength = 4

const filterWords = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength) {
            return true
        }
        return false
    })
    return result
}

// Export the function so it can be tested or reused. When this file is
// executed directly (node exemplu1.js) it will print the filtered result.
if (typeof module !== "undefined" && module.exports) {
    module.exports = { filterWords }
}

if (typeof require !== "undefined" && require.main === module) {
    console.log(filterWords(words, forbiddenWord, minLength))
}