import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

import getEntries from '../utils/requester'

// TODO: Add shorthad type system documentation

/**
 * [AuthorType description]
 * @type {GraphQLObjectType}
 */
export const AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  description: '[description]',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '[description]',
      resolve: (author) => author
    },
    name: {
      type: GraphQLString,
      description: '[description]'
    },
    website: {
      type: GraphQLString,
      description: '[description]'
    },
    profilePhoto: {
      type: GraphQLString,
      description: '[description]',
      resolve: (author) => author.profilePhoto.fields.file.url
    }
  })
})

/**
 * [AuthorQuery description]
 * @type {Object}
 */
export const AuthorQuery = {
  type: AuthorType,
  args: {
    id: {
      type: GraphQLString,
      description: '[description]'
    }
  },
  resolve: (root, { id }) => getEntries(id)
    .then((entries) => entries.items[0].fields)
}
