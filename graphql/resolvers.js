import { users, getUser } from "./db";

const resolvers = {
  Query: {
    user: () => users,
    users: (_, { id }) => getUser(id)
  }
};

export default resolvers;
