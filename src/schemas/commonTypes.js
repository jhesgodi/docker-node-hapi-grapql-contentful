import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'

/**
 *
 * CommonTypes is list of reusable type systems to define new GraphQL shemas
 * Shorthand description for <Common> type systems:
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
 * Describes images type system
 * @type {GraphQLObjectType}
 */
export const ImageType = new GraphQLObjectType({
  name: 'ImageType',
  description: 'Image Asset',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'unique id from cms',
      resolve: (obj) => obj.sys.id
    },
    type: {
      type: GraphQLString,
      description: 'entity type on cms',
      resolve: (obj) => obj.sys.type
    },
    url: {
      type: GraphQLString,
      description: 'image source link',
      resolve: (obj) => obj.fields.file.url
    },
    title: {
      type: GraphQLString,
      description: 'image title',
      resolve: (obj) => obj.fields.title
    },
    description: {
      type: GraphQLString,
      description: 'image description',
      resolve: (obj) => obj.fields.description
    }
  })
})

/**
 * Describes provinces type system
 * @type {GraphQLObjectType}
 */
export const ProvinceType = new GraphQLObjectType({
  name: 'ProvinceType',
  description: 'Province Entity',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'province iso subdivision code',
      resolve: (obj) => obj.fields.id
    },
    name: {
      type: GraphQLString,
      description: 'province full name',
      resolve: (obj) => obj.fields.name
    }
  })
})

export default null
