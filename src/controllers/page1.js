/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (response, reply) => {
  reply.view('page', {
    modules: [
      {
        id: 'hero',
        title: 'Testing Hero',
        image: 'http://placehold.it/1280x720',
        description: 'Testing if the hero works'
      },
      {
        id: 'article',
        title: 'Article Test',
        image: 'http://placehold.it/350x350',
        description: 'Testing if the article works'
      },
      {
        id: 'article',
        title: 'Another Test',
        image: 'http://placehold.it/350x150',
        description: 'This should be a second article'
      }
    ]
  })
}
