import Hapi from 'hapi'
import Good from 'good'
import Bcrypt from 'bcrypt'
import Vision from 'vision'
import BasicAuth from 'hapi-auth-basic'
import GraphQL from 'hapi-graphql'
import TestSchema from './src/schemas/author'

import routes from './src/routes'
import {
  goodConfig,
  viewsConfig,
  // graphqlConfig,
  connectionConfig
} from './src/config'

// Create new server instance
const server = new Hapi.Server()

// Add server’s connection information
server.connection(connectionConfig)

// register plugins to server instance
server.register([
  {
    register: Vision
  },
  {
    register: Good,
    options: goodConfig
  },
  {
    register: GraphQL,
    options: {
      query: {
        schema: TestSchema,
        graphiql: true,
        formatError: (error) => ({
          message: error.message,
          locations: error.locations,
          stack: error.stack
        })
      },
      route: {
        path: '/graphql/{params*}',
        config: {}
      }
    }
  },
  {
    register: BasicAuth
  }
], (errPlugins) => {
  if (errPlugins) {
    server.log('error', 'Failed to install plugins')
    throw errPlugins
  }
  server.log('info', 'Plugins registered')

  // Views configuration
  server.views(viewsConfig)
  server.log('info', 'View configuration completed')

  // Hardcoded users object mock
  const users = {
    admin: {
      username: 'admin',
      password: '$2a$04$YPy8WdAtWswed8b9MfKixebJkVUhEZxQCrExQaxzhcdR2xMmpSJiG',
      name: 'Admin',
      id: '1'
    }
  }

  // Validation function used for hapi-auth-basic
  const basicValidation = (request, username, password, callback) => {
    const user = users[username]

    if (!user) {
      return callback(null, false)
    }

    Bcrypt.compare(password, user.password, (bcryptError, isValid) => {
      server.log('info', 'User authentication successful')
      callback(bcryptError, isValid, {
        id: user.id,
        name: user.name
      })
    })

    return null
  }

  server.auth.strategy('basic', 'basic', { validateFunc: basicValidation })
  server.log('info', 'Registered auth strategy: basic auth')

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
