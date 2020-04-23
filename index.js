const { ApolloServer} = require('apollo-server')

const server = new ApolloServer({
    modules:[
        require('./modules/product'),
        require('./modules/category'),
        require('./modules/music')
    ]
})

server.listen().then(({ url }) => console.log(`Apollo Server started at ${url}`))