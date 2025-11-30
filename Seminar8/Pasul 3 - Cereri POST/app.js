const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000


const bookRouter = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', bookRouter)


let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asimov")]

bookRouter.route('/books')
    //Step 1 - GET request
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        }
        else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })

    //Step 2 - POST request -> cu validare
    .post((req, res) => {
        if (!req.body.id || isNaN(req.body.id)) {
            return res.status(400).json({ message: "Invalid id" });
        }

        if (!req.body.name || req.body.name.trim() === "") {
            return res.status(400).json({ message: "Invalid name" });
        }

        if (!req.body.genre || req.body.genre.trim() === "") {
            return res.status(400).json({ message: "Invalid genre" });
        }

        if (!req.body.author || req.body.author.trim() === "") {
            return res.status(400).json({ message: "Invalid author" });
        }

        let newBook = new Book(
            Number(req.body.id),
            req.body.name,
            req.body.genre,
            req.body.author
        );

        books.push(newBook);
        console.log(books);
        return res.json(newBook);
    })

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})