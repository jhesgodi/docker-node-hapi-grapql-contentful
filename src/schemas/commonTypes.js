import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

/**
 *
 * Shorthand description for <Common> type systems: *
 *
 * type Image: Object {
 *   id: String!
 *   type: String
 *   url: String
 *   title: String
 *   description: String
 * }
 *
 * type Province : Object {
 *   id: String!
 *   name: String
 * }
 *
 */

/**
 * [ImageType description]
 * @type {GraphQLObjectType}
 */
export const ImageType = new GraphQLObjectType({
  name: 'ImageType',
  description: '[description]',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '[description]',
      resolve: (obj) => obj.sys.id
    },
    type: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.sys.type
    },
    url: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.fields.file.url
    },
    title: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.fields.title
    },
    description: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.fields.description
    }
  })
})

/**
 * [ProvinceType description]
 * @type {GraphQLObjectType}
 */
export const ProvinceType = new GraphQLObjectType({
  name: 'ProvinceType',
  description: '[description]',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '[description]',
      resolve: (obj) => obj.fields.id
    },
    name: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.fields.name
    }
  })
})

export default null
