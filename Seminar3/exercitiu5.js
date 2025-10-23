const censorText = (text, dictionary) => {
    
    const words = text.split(' ')
 
     const censoredWords = words.map((word) => {
      
        if (dictionary.includes(word)) {
            if (word.length <= 2) return word 
        
            const middle = '*'.repeat(word.length - 2)
            return word[0] + middle + word[word.length - 1]
        }

        
        return word
    })

    return censoredWords.join(' ')
}


const text = "javascript este minunat"
const dictionary = ["este"]

console.log(censorText(text, dictionary))
