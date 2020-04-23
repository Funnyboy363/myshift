const { gql } = require('apollo-server');
const typeDefs = gql`
 extend type Query {
     videogame(id: ID!): Videogame
     videogames: [Videogame]

 }

 type Videogame {
     id: ID!
     name: String!
    
 }

 type Mutation {
    createVideogame(data: VideogameCreate!): Videogame!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }
  
  input VideogameCreate {
    id: ID
    name: String!
  }
 `

 const resolvers = {
     Query: {
         videogame(_, {id}) {
             return {
                 id,
                 name: 'Lamp',
                
             }
         },
         videogames() {
             return [
                 {
                     id: Math.round(Math.random() * 10000),
                     name: 'BlackOps IV',
                    
                    
                 },
                 {
                 id: Math.round(Math.random() * 10000),
                 name: 'Assassins Creed Unity',
                
                 },
                 {
                    id: Math.round(Math.random() * 10000),
                    name: 'Apex Legends',
                  
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Halo 5',
               
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Undertale',
                 
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Soul Caliber IV',
                
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Call Of Duty: Modern Warfare',
                 
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Fortnite',
               
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Mario World 3',
                  
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Animal Crossing',
               
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Doom',
                   
                   
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Assassins Creed: Black Flag',
               
                },
                {
                   id: Math.round(Math.random() * 10000),
                   name: 'Earthworm Jim',
                 
               },
               {
               id: Math.round(Math.random() * 10000),
               name: 'The Legends of Zelda: Breath of the Wild',
              
               },
               {
                   id: Math.round(Math.random() * 10000),
                   name: 'Grand Theft Auto: V',
                
               },
               {
               id: Math.round(Math.random() * 10000),
               name: 'Overwatch',
               
               },
               {
                   id: Math.round(Math.random() * 10000),
                   name: 'BioShock',
                
               },
               {
               id: Math.round(Math.random() * 10000),
               name: 'The Last of Us',
              
               },
               {
                   id: Math.round(Math.random() * 10000),
                   name: 'Player Uknown Battlegrounds',
                 
               },
               {
               id: Math.round(Math.random() * 10000),
               name: 'Death Stranding',
              
               },
               {
                id: Math.round(Math.random() * 10000),
                name: 'League Of Legends',
                
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Pojemon Sword and Shield',
                 
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'Cyberpunk 2077',
               
                },
                {
                    id: Math.round(Math.random() * 10000),
                    name: 'Dark Souls',
                  
                },
                {
                id: Math.round(Math.random() * 10000),
                name: 'The Witcher: Wild Hunt',
               
                },
             ]
         }
     }
 }


 module.exports = {
     typeDefs,
     resolvers
 }