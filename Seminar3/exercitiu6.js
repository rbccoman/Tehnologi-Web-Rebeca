const sortByKey = (array, key) => {
    const newArray = [...array]

    newArray.sort((a, b) => {
        if (a[key] < b[key]) return -1
        if (a[key] > b[key]) return 1
        return 0
    })

    return newArray
}

const laptops = [
    {
        brand: 'HP',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Lenovo',
        processor: 'i5',
        ram: 16
    },
    {
        brand: 'Acer',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Asus',
        processor: 'i7',
        ram: 8
    },
]


console.log(sortByKey(laptops, 'brand'))


console.log(sortByKey(laptops, 'ram'))
