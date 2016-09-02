export default [
  {
    method: 'GET',
    path: '/',
    handler(request, reply) {
      const data = {
        message: 'Check the route that requires auth at /basic'
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
];
