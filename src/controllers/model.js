// import util from 'util'
import { getEntries } from '../utils/requester'
import { PAGE } from '../utils/contentTypes'

/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (request, reply) => {
  getEntries(PAGE, {
    locale: 'en-US'
  })
  .then((entries) => {
    const entry = entries
    // console.log(util.inspect(entry, { depth: null }))
    reply.view('index', { data: entry.items[0].fields })
  })
}
