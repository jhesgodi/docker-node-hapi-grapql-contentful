import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

/** Type systems & Query types */
import { AuthorType, AuthorQuery } from './authorType'

/**
 * [QueryType description]
 * @type {GraphQLObjectType}
 */
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '[description]',

  fields: () => ({
    author: AuthorQuery
  })
})

/** @access private */
export default new GraphQLSchema({
  query: QueryType,
  types: [
    AuthorType
  ]
})
