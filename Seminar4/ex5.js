/* iplementați funcția increaseSalary care 
primește ca parametrii un array de salarii 
și un număr reprezentând procentul cu care se 
vor mări (ex 10). Funcția aruncă excepții dacă
primul parametru nu este un array sau al doilea 
parametru nu este un număr. */


function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new Error("Primul parametru trebuie sa fie un array");
    }
    if (typeof percent !== 'number') {
        throw new Error("Al doilea parametru trebuie sa fie un numar");
    }
    return salaries.map(salary => salary + (salary * percent / 100));
}


try {
    const updatedSalaries = increaseSalary([1000, 2000, 3000], 10);     
    console.log(updatedSalaries); 
} catch (error) {
    console.error(error.message);
}   
try {
    increaseSalary("not an array", 10); 
} catch (error) {
    console.error(error.message); 
}       
try {
    increaseSalary([1000, 2000, 3000], "not a number"); 
} catch (error) {
    console.error(error.message); 
}   



