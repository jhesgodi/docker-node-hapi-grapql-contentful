import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

/** Type systems & Query types */
import { ProvincesType, ProvincesQuery } from './provincesType'

/**
 * [QueryType description]
 * @type {GraphQLObjectType}
 */
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '[description]',

  fields: () => ({
    provinces: ProvincesQuery
  })
})

/** @access private */
export default new GraphQLSchema({
  query: QueryType,
  types: [
    ProvincesType
  ]
})
