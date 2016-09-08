import * as contentTypes from '../utils/contentTypes'

/**
 * Creates a query descriptor to request pages
 * @param  {String} provinceId Procince ISO subdivision code
 * @return {String} grapql query descriptor
 */
export const pages = (provinceId) =>
  `{
    pages(id: "${contentTypes.PAGE}", province: "${provinceId}") {
      id
      name
      locale
      modules {
        id
        type
        title
        description
        image {
          id
          type
          title
          description
          url
        }
        ... on ArticleType {
          style
          ctaCopy
          ctaUrl
        }
        provinces {
          id
          name
        }
      }
    }
  }`

// TODO: Delete later on when more exports are added
export default null
