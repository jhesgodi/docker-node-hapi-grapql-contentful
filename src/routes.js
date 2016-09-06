import path from 'path'

import {
  Home,
  Product,
  Post
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
    path: '/',
    handler: Home
  },
  {
    method: 'GET',
    path: '/products',
    handler: Product
  },
  {
    method: 'GET',
    path: '/posts',
    handler: Post
  }
]

export default routes
