import { users, getUser } from "./db";

const resolvers = {
  Query: {
    user: () => users,
    users: () => getUser()
  }
};

export default resolvers;
