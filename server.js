import Hapi from 'hapi';
import Good from 'good';
import Bcrypt from 'bcrypt';
import Vision from 'vision';
import Handlebars from 'handlebars';
import BasicAuth from 'hapi-auth-basic';

import routes from './routes';

const host = 'localhost'
const port = 3000
const viewsPath = __dirname + '/views'

// Create new server instance
const server = new Hapi.Server()

// Add server’s connection information
server.connection({
  host,
  port
})

// register plugins to server instance
server.register([
  {
    register: Vision
  },
  {
    register: Good,
    options: {
      ops: {
        interval: 10000
      },
      reporters: {
        console: [
          {
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [ { log: '*', response: '*', request: '*' } ]
          },
          {
            module: 'good-console'
          },
          'stdout'
        ]
      }
    }
  },
  {
    register: BasicAuth
  }
], (err) => {
  if (err) {
    server.log('error', 'Failed to install plugins')

    throw err
  }
  server.log('info', 'Plugins registered')

  // Views configuration
  server.views({
    engines: {
      html: Handlebars
    },
    path: viewsPath,
    layout: true
  })
  server.log('info', 'View configuration completed')

  // Hardcoded users object mock
  const users = {
    admin: {
      username: 'admin',
      // 'studio'
      password: '$2a$04$YPy8WdAtWswed8b9MfKixebJkVUhEZxQCrExQaxzhcdR2xMmpSJiG',
      name: 'Admin',
      id: '1'
    }
  }

  // Validation function used for hapi-auth-basic
  const basicValidation = (request, username, password, callback) => {
    const user = users[ username ]

    if (!user) {
      return callback(null, false)
    }

    Bcrypt.compare(password, user.password, function (err, isValid) {
      server.log('info', 'User authentication successful')
      callback(err, isValid, {
        id: user.id,
        name: user.name
      })
    })
  }

  server.auth.strategy('basic', 'basic', { validateFunc: basicValidation })
  server.log('info', 'Registered auth strategy: basic auth')

  server.route(routes)
  server.log('info', 'Routes registered')

  // Start your server after plugin registration
  server.start((err) => {
    if (err) {
      server.log('error', 'Failed to start server')
      server.log('error', err)

      throw err
    }
    server.log('info', 'Server running at: ' + server.info.uri)
  })
})
