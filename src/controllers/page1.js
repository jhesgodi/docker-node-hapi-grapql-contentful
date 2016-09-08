import { ARTICLE, HERO } from '../utils/contentTypes'

/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (response, reply) => {
  reply.view('page', {
    types: {
      ARTICLE,
      HERO
    },
    modules: [
      {
        type: 'hero',
        title: 'Testing Hero',
        image: 'http://placehold.it/1280x720',
        description: 'Testing if the hero works'
      },
      {
        type: 'module1',
        title: 'Article Test',
        image: 'http://placehold.it/350x350',
        description: 'Testing if the article works'
      },
      {
        type: 'module1',
        title: 'Another Test',
        image: 'http://placehold.it/350x150',
        description: 'This should be a second article'
      }
    ]
  })
}
