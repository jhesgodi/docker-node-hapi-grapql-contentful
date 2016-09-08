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
 *
 * Shorthand description for <Page> type systems: *
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
* [belongsToProvince description]
* @param  {[type]} provinces  [description]
* @param  {[type]} provinceId [description]
* @return {[type]}            [description]
*/
function belongsToProvince(provinces, provinceId) {
  return provinces.some((province) => province.fields.id === provinceId)
}

/**
 * [filterProvinces description]
 * @param  {[type]} entries [description]
 * @param  {[type]} args    [description]
 * @return {[type]}         [description]
 */
function filterProvinces(entries, args) {
  return !args.province
    ? entries.items
    : entries.items.filter((item) =>
      belongsToProvince(item.fields.provinces, args.province)
    )
}

/**
 * [PagesType description]
 * @type {GraphQLObjectType}
 */
export const PagesType = new GraphQLObjectType({
  name: 'PagesType',
  description: '[description]',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '[description]',
      resolve: (obj) => obj.sys.id
    },
    locale: {
      type: GraphQLString,
      description: '[description]',
      resolve: () => globals.get('locale')
    },
    name: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.fields.name
    },
    modules: {
      type: new GraphQLList(ModuleInterface),
      description: '[description]',
      resolve: (obj) => obj.fields.modules
    }
  })
})

/**
 * [PagesQuery description]
 * @type {Object}
 */
export const PagesQuery = {
  type: new GraphQLList(PagesType),
  args: {
    id: {
      type: GraphQLString,
      description: '[description]'
    },
    province: {
      type: GraphQLString,
      description: '[description]'
    }
  },
  resolve: (_, args) =>
    getEntries(args.id, {
      locale: globals.get('locale')
    })
    .then((entries) => filterProvinces(entries, args))
}
