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
 * [commonFields description]
 * @type {Object}
 */
const commonFields = {
  id: {
    type: new GraphQLNonNull(GraphQLString),
    description: '[description]',
    resolve: (obj) => obj.sys.id
  },
  type: {
    type: new GraphQLNonNull(GraphQLString),
    description: '[description]',
    resolve: (obj) => obj.sys.contentType.sys.id
  },
  title: {
    type: GraphQLString,
    description: '[description]',
    resolve: (obj) => obj.fields.title
  },
  image: {
    type: ImageType,
    description: '[description]',
    resolve: (obj) => obj.fields.image
  },
  provinces: {
    type: new GraphQLList(ProvinceType),
    description: '[description]',
    resolve: (obj) => obj.fields.provinces
  }
}

/**
 * [ArticleType description]
 * @type {GraphQLObjectType}
 */
export const ModuleInterface = new GraphQLInterfaceType({
  name: 'Module',
  description: '[description]',

  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: '[description]'
    },
    type: {
      type: new GraphQLNonNull(GraphQLString),
      description: '[description]'
    },
    title: {
      type: GraphQLString,
      description: '[description]'
    },
    image: {
      type: ImageType,
      description: '[description]'
    },
    provinces: {
      type: new GraphQLList(ProvinceType),
      description: '[description]'
    }
  }),
  resolveType: getModuleResolveType
})

/**
 * [ArticleType description]
 * @type {GraphQLObjectType}
 */
export const ArticleType = new GraphQLObjectType({
  name: 'ArticleType',
  description: '[description]',

  fields: () => ({
    ...commonFields,
    description: {
      type: GraphQLString,
      description: '[description]',
      resolve: (obj) => obj.fields.description
    }
  }),
  interfaces: [ModuleInterface]
})

/**
 * [HeroType description]
 * @type {GraphQLObjectType}
 */
export const HeroType = new GraphQLObjectType({
  name: 'HeroType',
  description: '[description]',

  fields: () => ({
    ...commonFields
  }),
  interfaces: [ModuleInterface]
})

/**
 * [getModuleResolveType description]
 * @param  {[type]} module [description]
 * @return {[type]}        [description]
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
 * [ModuleQuery description]
 * @type {Object}
 */
export const ModuleQuery = {}
