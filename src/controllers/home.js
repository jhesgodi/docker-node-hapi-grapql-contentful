import { graphql } from 'graphql'

import schema from '../schemas'
import * as queries from '../queries'
import * as globals from '../utils/globals'
import { doRequest } from '../utils/requester'
import { gelocalizeIp } from '../utils/endpoints'
import { ARTICLE, HERO } from '../utils/contentTypes'

/**
 * [description]
 * @param  {[type]} response [description]
 * @param  {[type]} reply    [description]
 * @return {[type]}          [description]
 */
export default (request, reply) => {
  const endpoint = gelocalizeIp(request.query.ip)
  const requestHandler = (geoRef) => {
    const locale = `${geoRef.locale_code}-${geoRef.country_iso_code}`
    const provinceId = geoRef.subdivision_1_iso_code

    globals.set('locale', locale)

    const query = queries.pages(provinceId)
    const handler = ({ data }) => {
      const page = data.pages.find((thisPage) =>
        thisPage.name === decodeURIComponent('Page%20A')
      )

      if (!page) {
        reply.view('error', {})
      }

      const modules = page.modules.filter((thisModule) =>
        thisModule.provinces.some((thisProvince) =>
          thisProvince.id === provinceId
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

  doRequest(endpoint).then(requestHandler)
}
