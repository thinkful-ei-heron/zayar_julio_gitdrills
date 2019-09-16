
function getYearOfBirth(age){
    return 2019 - age;
}

function createGreeting(name, age){
    if (name === undefined || age === undefined) {
        throw new Error('name/age not defined');
    }
    if (typeof age !== 'number') {
        throw new Error('age must be a number');
    }
    if (age < 0) {
        throw new Error('age cannot be negative');
    }
    const yearOfBirth = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}.`;
}

try {
    const greeting1 = createGreeting('Bob', 35);
    console.log(greeting1);
} catch(e) {
    console.error(e.message);
}
