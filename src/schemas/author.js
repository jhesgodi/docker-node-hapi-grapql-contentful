import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

import getEntries from '../utils/requester'

const AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  description: '[description]',

  fields: () => ({
    name: { type: GraphQLString },
    website: { type: GraphQLString },
    profilePhoto: {
      type: GraphQLString,
      resolve: (author) => author.profilePhoto.fields.file.url
    }
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '[description]',

  fields: () => ({
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (root, args) => getEntries(args.id)
        .then((entries) => entries.items[0].fields)
    }
  })
})

export default new GraphQLSchema({
  query: QueryType
})
