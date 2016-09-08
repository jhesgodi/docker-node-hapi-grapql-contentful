/**
 * @file Exports a GraphQLSchema build from imported type systems & query types
 */

import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql'

/** Type systems & Query types */
import { PagesQuery } from './pagesType'
import { ArticleType, HeroType } from './moduleType'

/**
 * GrapQL Query type descriptor
 * @type {GraphQLObjectType}
 * @access private
 */
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Application available queries to CMS',

  fields: () => ({
    pages: PagesQuery
  })
})

/** @access public */
export default new GraphQLSchema({
  query: QueryType,
  types: [
    HeroType,
    ArticleType
  ]
})
