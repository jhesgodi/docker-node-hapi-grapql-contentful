import { PRODUCT } from '../utils/contentTypes'
import getEntries from '../utils/requester'

/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (response, reply) => {
  // TODO: Refactor to new basic graphql queries
  getEntries(PRODUCT).then((entries) => {
    reply.view('index', entries)
  })
}
