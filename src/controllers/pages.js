import { graphql } from 'graphql'

import { ARTICLE, HERO } from '../utils/contentTypes'
import * as globals from '../utils/globals'
import schema from '../schemas'
import * as queries from '../queries'

/**
 * Handle requests made to route: <'/{province}/{locale}/{page}' -> Pages>
 * This handler uses grapql to requests a list of pages for an specific
 * province / languaje
 * @param  {Object} route request parameters
 * @param  {ReplyInterface} reply reply interface to handle responses and rendering
 * @return {undefined}
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
