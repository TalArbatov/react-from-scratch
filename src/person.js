const createPerson = (age, gender) => {
  return{age, gender};
};

const isAdult = age => (age < 18 ? false : true);


export { createPerson, isAdult };
