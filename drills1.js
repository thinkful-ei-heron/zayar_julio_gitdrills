
function getYearOfBirth(age){
    if (age < 0) {
        throw new Error('Age can not be negative');
    }
    const yearOfBirth = 2019 - age;
    return yearOfBirth;
}

function createGreeting(name, age){
    const yearOfBirth = getYearOfBirth(age);
    return `I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting();

console.log(greeting1);