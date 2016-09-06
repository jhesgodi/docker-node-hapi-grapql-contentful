import * as entries from '../utils/contentTypes'

/**
 * [authors description]
 * @return {[type]} [description]
 */
export const authors = () =>
  `{
    author(id:"${entries.AUTHOR}") {
      name
      website
      profilePhoto
    }
  }`

export const posts = () =>
  `{
    posts(id:"${entries.POST}") {
      name
    }
  }`
