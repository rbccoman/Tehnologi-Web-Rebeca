/* implementați metoda 'times' pe tipul Number, 
astfel încât 3.times(() => {}) să execute 
funcția de 3 ori. */


Number.prototype.times = function(callback) {
    for (let i = 0; i < this; i++) {
        callback();
    }
};


(3).times(() => {
    console.log("Hello");
});




