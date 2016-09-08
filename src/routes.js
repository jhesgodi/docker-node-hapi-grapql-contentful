import path from 'path'

import {
  Home,
  Model,
  Pages
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
  },
  {
    method: 'GET',
    path: '/page1',
    handler: Pages
  },
  {
    method: 'GET',
    path: '/{province}/{locale}/{page}',
    handler: Pages
  }
]

export default routes
