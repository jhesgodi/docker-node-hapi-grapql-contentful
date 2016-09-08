import Schema from '../../src/schemas'
import isProduction from '../utils/environment'

/**
 * By default returns GrapQL params object
 * @return {Object} default params for GrapiQL tool
 */
export default {
  query: {
    schema: Schema,
    graphiql: !isProduction,
    formatError: (error) => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack
    })
  },
  route: {
    path: '/graphql',
    config: {}
  }
}
