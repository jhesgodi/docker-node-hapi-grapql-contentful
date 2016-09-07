import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

import getEntries from '../utils/requester'

// TODO: Add shorthad type system documentation

/**
 * [ProvincesType description]
 * @type {GraphQLObjectType}
 */
export const ProvincesType = new GraphQLObjectType({
  name: 'ProvincesType',
  description: '[description]',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '[description]',
      resolve: (obj) => obj.sys.id
    },
    name: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.fields.name
    }
  })
})

/**
 * [ProvincesQuery description]
 * @type {Object}
 */
export const ProvincesQuery = {
  type: new GraphQLList(ProvincesType),
  args: {
    id: {
      type: GraphQLString,
      description: '[description]'
    }
  },
  resolve: (_, { id }) => getEntries(id)
    .then((entries) => entries.items)
}
