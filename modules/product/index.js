const { gql } = require('apollo-server');
const typeDefs = gql`
 extend type Query {
     product(id: ID!): Product
     products: [Product]
 }

 type Product {
     id: ID!
     name: String!
     price: Int!
 }
 `

 const resolvers = {
     Query: {
         product(_, {id}) {
             return {
                 id,
                 name: 'Lamp',
                 price: 1000
             }
         },
         products() {
             return [
                 {
                     id: Math.round(Math.random() * 10000),
                     name: 'Lamp',
                    price: 1000
                 },
                 {
                 id: Math.round(Math.random() * 10000),
                 name: 'Sofa',
                 price: 20000
                 },
                 {
                    id: Math.round(Math.random() * 10000),
                    name: 'Couch',
                   price: 4000
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Television',
                price: 2000
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Playstation',
                   price: 2400
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Bed',
                price: 28000
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Bathtub',
                   price: 1100
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Dog',
                price: 457
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Cat',
                   price: 58678
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Carpet',
                price: 4467
                },
             ]
         }
     }
 }


 module.exports = {
     typeDefs,
     resolvers
 }