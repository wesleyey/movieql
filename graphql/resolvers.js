import { allUsers, getUser, addUser, deleteUser } from "./db";

const resolvers = {
  Query: {
    user: () => allUsers(),
    users: (_, { id }) => getUser(id)
  },
  Mutation: {
    addUser: (_, { name, age, region }) => addUser(name, age, region),
    deleteUser: (_, { id }) => deleteUser(id)
  }
};

export default resolvers;
