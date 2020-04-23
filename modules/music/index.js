const { gql } = require('apollo-server');
const typeDefs = gql`
 extend type Query {
     music(id: ID!): Music
     musics: [Music]
 }

 type Music {
     id: ID!
     title: String!
     artist: String!

 }
 `

 const resolvers = {
     Query: {
         music(_, {id}) {
             return {
                 id,
                 title: 'Lofi hip hop radio - beats to sleep/chill to',
                artist: 'Chilled Cow'
             }
         },
         musics() {
             return [
                 {
                     id: Math.round(Math.random() * 10000),
                     title: 'Lofi hip hop radio - beats to sleep/chill to',
                     artist: 'Chilled Cow'
                 },
                 {
                 id: Math.round(Math.random() * 10000),
                 title: 'Lofi hip hop radio - beats to relax/study to',
                 artist: 'Chilled Cow'
                 },
                 {
                    id: Math.round(Math.random() * 10000),
                    title: 'coffee shop radio // 24/7 lofi hip-hop beats',
                   artist: 'steezyasfk'
                },
                {
                id: Math.round(Math.random() * 10000),
                title: 'lofi hip hop radio - sad and sleepy beats',
                artist: 'the bootleg boy'
                },
                {
                    id: Math.round(Math.random() * 10000),
                    title: 'shiloh- lofi hip hop mix live 24/7 shiloh dynasty',
                   artist: 'college music'
                },
                {
                id: Math.round(Math.random() * 10000),
                title: 'Beats to swim/tan to..',
                artist: 'Chillhop Music'
                },
                {
                    id: Math.round(Math.random() * 10000),
                    title: 'Chillhop Radio - Jazzy and lofi hip hop beats',
                   artist: 'Chillhop Music'
                },
             ]
         }
     }
 }


 module.exports = {
     typeDefs,
     resolvers
 }