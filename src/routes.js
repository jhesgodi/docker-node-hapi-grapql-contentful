import { getClient } from './utils/contentful'

const routes = [
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      const data = {
        message: 'Requested data:',
        response: {
          json: {
            a: 'key1',
            b: 'key2'
          }
        }
      }

      reply.view('index', data)
    }
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
