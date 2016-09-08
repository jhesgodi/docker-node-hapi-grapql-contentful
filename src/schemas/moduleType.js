import {
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql'

import { ImageType, ProvinceType } from './commonTypes'
import { HERO, ARTICLE } from '../utils/contentTypes'

/**
 * ModuleType defines an interface that describes Modules type system,
 * along with it's correspondent elegible types.
 *
 * Shorthand description for <Module> type systems:
 *
 * interface Module {
 *   id: String!
 *   type: String
 *   title: String
 *   description: String
 *   image: [Image]
 *   provinces: [Province]
 * }
 *
 * type Article : Module {
 *   id: String!
 *   type: String
 *   title: String
 *   description: String
 *   image: [Image]
 *   provinces: [Province]
 *   style: String
 *   ctaCopy: String
 *   ctaUrl: String
 * }
 *
 * type Hero : Module {
 *   id: String!
 *   type: String
 *   title: String
 *   description: String
 *   image: [Image]
 *   provinces: [Province]
 * }
 *
 */

/**
 * Reusable fields for ModuleInterface implementations
 * @type {Object}
 */
const commonFields = {
  id: {
    type: new GraphQLNonNull(GraphQLString),
    description: 'unique id from cms',
    resolve: (obj) => obj.sys.id
  },
  type: {
    type: new GraphQLNonNull(GraphQLString),
    description: 'entity type on cms',
    resolve: (obj) => obj.sys.contentType.sys.id
  },
  title: {
    type: GraphQLString,
    description: 'title content',
    resolve: (obj) => obj.fields.title
  },
  description: {
    type: GraphQLString,
    description: 'description content',
    resolve: (obj) => obj.fields.description
  },
  image: {
    type: ImageType,
    description: 'liked image',
    resolve: (obj) => obj.fields.image
  },
  provinces: {
    type: new GraphQLList(ProvinceType),
    description: 'linked provinces',
    resolve: (obj) => obj.fields.provinces
  }
}

/**
 * Describes an Interface for Modules
 * @type {GraphQLObjectType}
 */
export const ModuleInterface = new GraphQLInterfaceType({
  name: 'Module',
  description: 'Module Interface -> Describes implementation for Module types',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'unique id from cms'
    },
    type: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'entity type on cms'
    },
    title: {
      type: GraphQLString,
      description: 'title content'
    },
    description: {
      type: GraphQLString,
      description: 'description content'
    },
    image: {
      type: ImageType,
      description: 'liked image'
    },
    provinces: {
      type: new GraphQLList(ProvinceType),
      description: 'lined provinces'
    }
  }),
  resolveType: getModuleResolveType
})

/**
 * Describes Article<Module> type system
 * @type {GraphQLObjectType}
 */
export const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  description: 'Article -> Describes implementation of ModuleInterface for Articles',

  fields: () => ({
    ...commonFields,
    style: {
      type: GraphQLString,
      description: 'describes image position',
      resolve: (obj) => obj.fields.style
    },
    ctaCopy: {
      type: GraphQLString,
      description: 'call to action copy text',
      resolve: (obj) => obj.fields.ctaCopy
    },
    ctaUrl: {
      type: GraphQLString,
      description: 'call to action url',
      resolve: (obj) => obj.fields.ctaUrl
    }
  }),
  interfaces: [ModuleInterface]
})

/**
 * Describes Hero<Module> type system
 * @type {GraphQLObjectType}
 */
export const HeroType = new GraphQLObjectType({
  name: 'HeroType',
  description: 'Hero -> Describes implementation of ModuleInterface for Heros',

  fields: () => ({
    ...commonFields
  }),
  interfaces: [ModuleInterface]
})

/**
 * Resolves system type for ModuleInterface on execution time
 * @param  {GraphQLInterfaceType} module current module from API response
 * @return {GraphQLObjectType} module that matchs content type fetched
 */
function getModuleResolveType(module) {
  const contentType = module.sys.contentType.sys.id
  let type = null

  switch (contentType) {
    case HERO:
      type = HeroType
      break
    case ARTICLE:
      type = ArticleType
      break
    default:
      type = null
  }

  return type
}

/**
 * Module query descriptor
 * @type {Object}
 */
export const ModuleQuery = {}
