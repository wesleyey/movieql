export let users = [
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

export const allUsers = () => users;

export const getUser = id => {
  const filteredUser = users.filter(user => user.id === id);
  return filteredUser[0];
};

export const deleteUser = id => {
  const deleteResult = users.filter(user => user.id !== id);
  if (users.length > deleteResult.length) {
    users = deleteResult;
    return true;
  } else {
    return false;
  }
};

export const addUser = (name, age, region) => {
  const newUser = {
    id: users.length + 1,
    name,
    age,
    region
  };
  users.push(newUser);
  return newUser;
};
