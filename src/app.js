import * as actions from './person';

const person = actions.createPerson(41, 'female');
console.log(person);
const isAdult = actions.isAdult(person.age);
console.log(isAdult);
