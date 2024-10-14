import { tasks } from "./sample.js";
import User from "./models/User.js";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world with GraphQL';
        },

        greet(root, args, context) {
            console.log(context);
            console.log(args.name);
            return `Hello ${args.name}`;
        },

        tasks() {
            return tasks;
        },

        async users() { // Asegúrate de que coincida con el tipo definido
            return await User.find();
        }
    },

    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length.toString();
            tasks.push(input);
            return input;
        },

        async createUser(_, { input }) {
            const newUser = new User(input);
            await newUser.save();
            return newUser;
        }
    }
};
