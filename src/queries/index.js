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
        ... on ArticleType {
          description
        }
        image {
          id
          type
          title
          description
          url
        }
        provinces {
          id
          name
        }
      }
    }
  }`

export default null
