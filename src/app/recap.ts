const username: string = 'marito';

const sum = (a: number, b: number) => {
  return a + b
}

sum(1, 3);

class Person {

  constructor(public age: number, public lastname: string) { }
}

const oxalc = new Person(25, 'Quispe')
oxalc.age
