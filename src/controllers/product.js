import { PRODUCT } from '../utils/entries'
import getEntries from '../utils/requester'

/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (response, reply) => {
  getEntries(PRODUCT).then((entries) => {
    reply.view('index', entries)
  })
}
