import { graphql } from 'graphql'
import schema from '../schemas'
import * as queries from '../queries'

/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (request, reply) => {
  const query = queries.authors()
  const handler = (data) => {
    reply.view('index', data)
  }

  graphql(schema, query).then(handler)
}
