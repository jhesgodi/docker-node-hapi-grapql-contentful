import Hapi from 'hapi'
import Good from 'good'
import Inert from 'inert'
import Vision from 'vision'
import GraphQL from 'hapi-graphql'

import routes from './src/routes'
import {
  goodConfig,
  viewsConfig,
  graphqlConfig,
  connectionConfig
} from './src/config'

/** Create new server instance */
const server = new Hapi.Server()

/** Add server’s connection information */
server.connection(connectionConfig)

/** Register plugins to server instance */
server.register([
  {
    register: Vision
  },
  {
    register: Inert
  },
  {
    register: Good,
    options: goodConfig
  },
  {
    register: GraphQL,
    options: graphqlConfig
  }
], (errPlugins) => {
  if (errPlugins) {
    server.log('error', 'Failed to install plugins')
    throw errPlugins
  }
  server.log('info', 'Plugins registered')

  /** Views configuration */
  server.views(viewsConfig)
  server.log('info', 'View configuration completed')

  /** Register routes */
  server.route(routes)
  server.log('info', 'Routes registered')

  // Start the server after plugin registration
  server.start((errStart) => {
    if (errStart) {
      server.log('error', 'Failed to start server')
      server.log('error', errStart)
      throw errStart
    }
    server.log('info', `🌎  Server running at: ${server.info.uri}`)
  })
})
