import { graphql } from 'graphql'

import schema from '../schemas'
import * as queries from '../queries'
import * as globals from '../utils/globals'
import { doRequest } from '../utils/requester'
import { gelocalizeIp } from '../utils/endpoints'
import { ARTICLE, HERO } from '../utils/contentTypes'

/**
 * Default view partials
 * @access private
 * @type {String}
 */
const views = {
  default: 'page',
  error: 'error'
}

/**
 * Get geolocalization data from given ip address
 * @param  {Number} ip ip address to be consulted
 * @return {Promise} promise to resolve data fetched
 */
const loadGeoreference = (ip) => {
  const endpoint = gelocalizeIp(ip)

  return doRequest(endpoint)
    .then((data) => data)
}

/**
 * Get pages from CMS acording to geolocalization
 * @param  {Object} geoRef geolocalization data
 * @return {Promise} promise to resolve fetched pages
 */
const loadPages = (geoRef) => {
  const locale = `${geoRef.locale_code}-${geoRef.country_iso_code}`
  const provinceId = geoRef.subdivision_1_iso_code
  const query = queries.pages(provinceId)

  globals.set('locale', locale)

  return graphql(schema, query)
    .then((data) => ({ provinceId, data }))
}

/**
 * Handle requests made to route: <'/' -> Home page>
 * @param  {Object} route request parameters
 * @param  {ReplyInterface} reply reply interface to handle responses and rendering
 * @return {undefined}
 */
export default (request, reply) => {
  const handleRequest = (provinceId, { data }) => {
    const page = data.pages.find((thisPage) =>
      thisPage.name === decodeURIComponent('Page%20A')
    )

    if (!page) {
      reply.view(views.error, {})
    }

    const modules = page.modules.filter((thisModule) =>
      thisModule.provinces.some((thisProvince) =>
        thisProvince.id === provinceId
      )
    )
    const response = {
      types: {
        ARTICLE,
        HERO
      },
      modules
    }

    reply.view(views.default, response)
  }

  loadGeoreference(request.query.ip)
    .then(loadPages)
    .then(handleRequest)
    .done()
}
