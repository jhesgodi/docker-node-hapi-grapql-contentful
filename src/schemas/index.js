import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

/** Type systems & Query types */
import { PagesQuery } from './pagesType'
import { ArticleType, HeroType } from './moduleType'

/**
 * [QueryType description]
 * @type {GraphQLObjectType}
 */
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '[description]',

  fields: () => ({
    pages: PagesQuery
  })
})

/** @access private */
export default new GraphQLSchema({
  query: QueryType,
  types: [
    HeroType,
    ArticleType
  ]
})
