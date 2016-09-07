import { getClient, spaceID, getAccessToken } from '../utils/contentful'
import { defaults } from '../config/contentful'

/**
 * [getEntries description]
 * @param  {[type]} contentType [description]
 * @return {[type]}             [description]
 */
export const getEntries = function(contentType, args = {}) {
  const client = getClient(spaceID, getAccessToken('production'))
  const thisArgs = {
    ...defaults.query,
    ...args
  }
  const options = {
    ...thisArgs,
    content_type: contentType
  }

  return client.getEntries(options)
}

/**
 * [getEntry description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
export const getEntry = function(id, args = {}) {
  const client = getClient(spaceID, getAccessToken('production'))
  const thisArgs = {
    ...defaults.query,
    ...args
  }

  return client.getEntry(id, thisArgs)
}
