import * as contentTypes from '../utils/contentTypes'

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

export default null
