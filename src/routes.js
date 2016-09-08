import path from 'path'

import {
  Home,
  Model,
  Pages
} from './controllers'

const routes = [
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public')
      }
    }
  },
  {
    method: 'GET',
    path: '/{province}/{locale}/{page}',
    handler: Pages
  },
  {
    method: 'GET',
    path: '/model',
    handler: Model
  },
  {
    method: 'GET',
    path: '/',
    handler: Home
  }
]

export default routes
