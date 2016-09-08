import { graphql } from 'graphql'

import { ARTICLE, HERO } from '../utils/contentTypes'
import * as globals from '../utils/globals'
import schema from '../schemas'
import * as queries from '../queries'

/**
 * [description]
 * @param  {[type]} request [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (request, reply) => {
  globals.set('locale', request.params.locale)

  const query = queries.pages(request.params.province)
  const handler = ({ data }) => {
    const page = data.pages.find((thisPage) =>
      thisPage.name === decodeURIComponent(request.params.page)
    )

    if (!page) {
      reply.view('error', {})
    }

    const modules = page.modules.filter((thisModule) =>
      thisModule.provinces.some((thisProvince) =>
        thisProvince.id === request.params.province
      )
    )

    reply.view('page', {
      types: {
        ARTICLE,
        HERO
      },
      modules
    })
  }

  graphql(schema, query).then(handler)
}
