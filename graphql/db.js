export const users = [
  {
    id: 0,
    name: "DevWesley",
    age: 25,
    region: "Korea"
  },
  {
    id: 1,
    name: "JJ",
    age: 20,
    region: "Japan"
  },
  {
    id: 2,
    name: "Comico",
    age: 32,
    region: "Spain"
  },
  {
    id: 3,
    name: "Pablo",
    age: 52,
    region: "Colombia"
  },
  {
    id: 4,
    name: "Julio",
    age: 15,
    region: "Mexico"
  }
];

export const getUser = id => {
  const filteredUser = user.filter(users => users.id === id);
  return filteredUser[0];
};
