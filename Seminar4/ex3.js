/* implementați o variantă recursiva a unei funcții de exponențiere. 
Atât rezultatele finale cât și cele intermediare vor fi memoizate. */

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();    
        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}

function exp(base, exponent) {
    if (exponent === 0) {
        return 1;
    
    } else {
        return base * exp(base, exponent - 1);
    }
}
const memoizedExp = memoize(exp);
console.log(memoizedExp(2, 3)); // 8
console.log(memoizedExp(2, 4)); // 16
console.log(memoizedExp(2, 3)); // 8 (from cache)



