import util from 'util'
import { getEntries } from '../utils/requester'
import { PAGE } from '../utils/contentTypes'
import * as globals from '../utils/globals'

/**
 * Handle requests made to route: <'/model' -> Model>
 * This is a test route handler, used to make raw queries directly to
 * contenful API
 * @param  {Object} route request parameters
 * @param  {ReplyInterface} reply reply interface to handle responses and rendering
 * @return {undefined}
 */
export default (request, reply) => {
  getEntries(PAGE, {
    locale: globals.get('locale')
  })
  .then((entries) => {
    const entry = entries
    console.log(util.inspect(entry, { depth: null }))
    reply.view('index', { data: entry.items[0].fields })
  })
}
