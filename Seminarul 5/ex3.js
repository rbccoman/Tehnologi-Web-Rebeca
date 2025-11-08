/*După ce ați testat exemplul, 
implementați un nou endpoint în server 
care să primească id-ul unei resurse și 
să răspundă cu resursa respectivă.*/

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const array = [
    { id: 1, name: "Ionuț", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
];

router.route("/getList").get((req, res) => {
    res.json(array);
});

router.route("/postList").post((req, res) => {
    let el = req.body;
    array.push(el);
    res.json(array);
});

// nou
router.route("/getById/:id").get((req, res) => {
    const id = parseInt(req.params.id);
    const item = array.find(x => x.id === id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: "Resursa nu a fost gasita." });
    }
});

let port = 8000;
app.listen(port);
console.log("API is running");
