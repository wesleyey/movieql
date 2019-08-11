import { allUsers, getUser, addUser } from "./db";

const resolvers = {
  Query: {
    user: () => allUsers(),
    users: (_, { id }) => getUser(id)
  },
  Mutation: {
    addUser: (_, { name, age, region }) => addUser(name, age, region)
  }
};

export default resolvers;
