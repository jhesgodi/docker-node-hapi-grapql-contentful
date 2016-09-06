import { AUTHOR } from '../utils/contentTypes'
import getEntries from '../utils/requester'

/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (response, reply) => {
  // TODO: Refactor to new basic graphql queries
  getEntries(AUTHOR).then((entries) => {
    reply.view('index', { data: entries.items })
  })
}
