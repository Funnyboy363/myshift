const { gql } = require('apollo-server-express');
const Movie = require('./models/myshift').myshift;


const typeDefs = gql `   type myshift {
    id: ID!
    name: String!
    producer: String!
    rating: Float!
  }   type Query {
    getmyshift: [shift]
    getmyshift(id: ID!): shift
  }   type Mutation {
    addmyshift(name: String!, shift: String!, hours: Float!): myshift
    updatemyshift(name: String!, shift: String!, rating: Float): myshift
    deletemyshift(id: ID!): myshift
  }
`



const resolvers = {
    Query: {
      getmyshift: (parent, args) => {
        return myshift.find({});
      },
      getmyshift: (parent, args) => {
        return myshift.findById(args.id);
      }
    },
    Mutation: {
      addmyshift: (parent, args) => {
        let myshift = new myshift({
          name: args.name,
          producer: args.shift,
          rating: args.hours,
        });
        return myshift.save();
      },
      updatemyshift: (parent, args) => {
        if (!args.id) return;
          return myshift.findOneAndUpdate(
           {
             _id: args.id
           },
           {
             $set: {
               name: args.name,
               producer: args.shift,
               rating: args.hours,
             }
           }, {new: true}, (err, myshift) => {
             if (err) {
               console.log('Something went wrong when updating the movie');
             } else {
             }
           }
        );
      }
    }
  }
