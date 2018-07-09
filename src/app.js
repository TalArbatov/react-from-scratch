import * as actions from './person';
import validator from 'validator';

const person = actions.createPerson(41, 'female');
console.log(person);
const isAdult = actions.isAdult(person.age);
console.log(isAdult);


console.log(validator.isEmail('talarbatov@d.com'));