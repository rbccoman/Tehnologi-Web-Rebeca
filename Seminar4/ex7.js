 /*Implementați o funcție care face deep clone unui obiect.
  Funcția creează o copie a întregii structuri a obiectului, la o adâncime arbitrară.*/
 
 function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

      if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clonedObj = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
}

const originalObject = {
    name: 'John',
    age: 30,
    address: {
        street: 'Main St',
        number: 123,
        city: {
            name: 'New York',
            country: 'USA'
        }
    },
    hobbies: ['reading', 'swimming', { type: 'sport', name: 'football' }],
    birthday: new Date('1993-05-15'),
    sayHello: function() { 
        console.log('Hello!');
    }
};

const clonedObject = deepClone(originalObject);

clonedObject.address.city.name = 'Los Angeles';
clonedObject.hobbies[2].name = 'basketball';

console.log('Original Object:');
console.log(JSON.stringify(originalObject, null, 2));
console.log('\nCloned Object:');
console.log(JSON.stringify(clonedObject, null, 2));