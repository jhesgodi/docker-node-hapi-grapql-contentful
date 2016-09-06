import * as entries from '../utils/contentTypes'

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
