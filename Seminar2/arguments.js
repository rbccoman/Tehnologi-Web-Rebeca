function addToArray(){
    let args=arguments;
    let array=args[0];
    for(var i=1;i<args.length;i++){
        array.push(args[i]);
            }
    return array;

}

let array=["a"];
console.log(addToArray(array,"b","c").join(", ")); // a, b, c

