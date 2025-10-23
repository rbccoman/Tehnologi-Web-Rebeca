const years = [2000,2005,2010,2015,2020]
const currentYear = 2025
const minAge = 18

const filterAges = (years, currentYear, minAge) => {
   
    const ages = years.map((year) => {
        return currentYear - year
    })

       const result = ages.filter((age) => {
        if (age > minAge) {
            return true
        }
        return false
    })

    return result
}

console.log(filterAges(years, currentYear, minAge))
