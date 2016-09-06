import Schema from '../../src/schemas'
import isProduction from '../utils/environment'

/** @access private */
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
