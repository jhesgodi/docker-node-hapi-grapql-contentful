import path from 'path'

import {
  Home,
  Model
} from './controllers'

const routes = [
  /** Static */
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public')
      }
    }
  },
  /** Dynamic */
  {
    method: 'GET',
    path: '/',
    handler: Home
  },
  {
    method: 'GET',
    path: '/model',
    handler: Model
  }
]

export default routes
