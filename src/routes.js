import { Home, Product, Post, BasicAuth } from './controllers'

const routes = [
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
  },
  {
    method: 'GET',
    path: '/basic',
    config: {
      auth: 'basic',
      handler: BasicAuth
    }
  }
]

export default routes
