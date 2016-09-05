import index from './controllers/index'

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: index
  },
  {
    method: 'GET',
    path: '/basic',
    config: {
      auth: 'basic',
      handler(request, reply) {
        reply.view('success')
      }
    }
  }
]

export default routes
