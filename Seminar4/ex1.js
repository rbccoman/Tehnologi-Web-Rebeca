/*  implementați un tip obiectual care implementează un șir crescător 
având ca elemente toate numerele pare pornind de la o valoare dată. 
Constructorul primește valoarea inițială a secvenței. 
Singura metodă este 'next' care calculează următoarea valoare din șir.  */

class Stream {
    #value;
  
    constructor(value) {
        if(value%2!==0){
            throw new Error("Valoarea initiala trebuie sa fie un numar par");
        }
        else this.#value = value;
    }
    get value() {
        return this.#value;
    }
    get next() {
       this.#value += 2;
        return this.#value;
    }
}
 
const n = new Stream(4);
console.log(n.value); // 4
console.log(n.next);  // 6
console.log(n.next);  // 8