export const people = [
  {
    id: 0,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 1,
    name: "Eun",
    age: 18,
    gender: "male",
  },
  { id: 2, name: "han", age: 18, gender: "female" },
  {
    id: 3,
    name: "river",
    age: 18,
    gender: "male",
  },
  {
    id: 4,
    name: "can",
    age: 18,
    gender: "female",
  },
];

export const getById = (id) => {
    const filteredPeople = people.filter((person) => id === person.id);
    return filteredPeople[0]
};
