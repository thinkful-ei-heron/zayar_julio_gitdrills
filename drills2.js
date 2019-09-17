/* eslint-disable strict */
function jediName(firstName, lastName) {
    let result = '';
    result += lastName.slice(0,3);
    result += firstName.slice(0,2);
    return result;
}
console.log(jediName('Beyonce','Knowles'));

function beyond(num){
    if (num == 0) {
        return 'Staying home';
    }
    if (isFinite(num)) {
        if (num > 0) {
            return 'To infinity';
        }
        if (num < 0) {
            return 'To negative infinity';
        }
    } else {
        return 'And beyond';
    }

}
console.log(beyond(100));

function decode(messege){
    let result = '';
    let words = messege.split(' ');
    words.forEach(word => {
        if(word.startsWith('a')) {
            result += word[1];
        }
        else if(word.startsWith('b')) {
            result += word[2];
        }
        else if(word.startsWith('c')) {
            result += word[3];
        }
        else if(word.startsWith('d')){
            result += word[4];
        }
        else {
            result += ' ';
        }
    }) 
    return result;
}
console.log(decode('craft block argon meter bells brown croon droop'))

function daysInMonth(month,leapYear) {
    let result;
    switch(month){
        case('April'):
        case('September'):
        case('June'):
        case('November'):
            result = `${month} has 30 days`;
            break;
        case('February'):
            if(leapYear) {
                result = `${month} has 29 days`;
            }
            else if(!leapYear) {
                result = `${month} has 28 days`;
            }
            break;
        case('January'):
        case('March'):
        case('May'):
        case('July'):
        case('August'):
        case('December'):
            result = `${month} has 31 days`;
            break;
        default :
            throw new Error('Must provide a valid month.');
    }
    return result;
}
console.log(daysInMonth('September', true));


function game(number){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if(number == undefined) {
        throw new Error('Invalid number');
    } else if(number >= 1 && number <=3) {
        if(randomNo == 1) {
            if(number == 1) {
                return 'tie';
            }
            if (number == 2) {
                return 'win';
            }
            if (number == 3) {
                return 'loss';
            }
        }
        if(randomNo == 2) {
            if(number == 1) {
                return 'loss';
            }
            if (number == 2) {
                return 'tie';
            }
            if (number == 3) {
                return 'win';
            }
        }
        if(randomNo == 3) {
            if(number == 1) {
                return 'win';
            }
            if (number == 2) {
                return 'loss';
            }
            if (number == 3) {
                return 'tie';
            }
        }
    }
}
console.log(game(2));