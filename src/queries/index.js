import * as entries from '../utils/entries'

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
