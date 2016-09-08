import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

import { ModuleInterface } from './moduleType'

import * as globals from '../utils/globals'
import { getEntries } from '../utils/requester'

/**
 * PagesType defines an interface that describes Pages type system and queries
 * Shorthand description for <Page> type systems:
 *
 * type Page : Object {
 *   id: String!
 *   locale: String
 *   name: String
 *   modules: [Module]
 * }
 *
 * type Query {
 *   pages(id: String!, province: String!): Page
 * }
 *
 */

/**
* Checks if a province id was found in the list
* @param  {Array} provinces  list of linked provinces
* @param  {[type]} provinceId id to be filtered
* @return {Boolean} true if was found, false otherwise
*/
function belongsToProvince(provinces, provinceId) {
  return provinces.some((province) => province.fields.id === provinceId)
}

/**
 * Filter a list of entries by province
 * @param  {Object} entries list of pages fetched from API
 * @param  {Object} args query arguments
 * @return {Array} lists of entries maching the filter
 */
function filterProvinces(entries, args) {
  return !args.province
    ? entries.items
    : entries.items.filter((item) =>
      belongsToProvince(item.fields.provinces, args.province)
    )
}

/**
 * Describes Page type system
 * @type {GraphQLObjectType}
 */
export const PagesType = new GraphQLObjectType({
  name: 'PagesType',
  description: 'Page -> Describes a page structure',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'unique id from cms',
      resolve: (obj) => obj.sys.id
    },
    locale: {
      type: GraphQLString,
      description: 'entity type on cms',
      resolve: () => globals.get('locale')
    },
    name: {
      type: GraphQLString,
      description: 'page name',
      resolve: (obj) => obj.fields.name
    },
    modules: {
      type: new GraphQLList(ModuleInterface),
      description: 'lists of liked modules to be shown',
      resolve: (obj) => obj.fields.modules
    }
  })
})

/**
 * Describes a query to retrieve all pages from cms
 * @type {Object}
 */
export const PagesQuery = {
  type: new GraphQLList(PagesType),
  args: {
    id: {
      type: GraphQLString,
      description: 'contentType of the entity on cms'
    },
    province: {
      type: GraphQLString,
      description: 'province ISO subdivision code to filter pages'
    }
  },
  resolve: (_, args) =>
    getEntries(args.id, {
      locale: globals.get('locale')
    })
    .then((entries) => filterProvinces(entries, args))
}
