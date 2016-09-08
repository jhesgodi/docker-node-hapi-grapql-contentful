import fetch from 'node-fetch'

import { getClient, spaceID, getAccessToken } from '../utils/contentful'
import { defaults } from '../config/contentful'

/**
 * Get all entries for a given content type
 * @param  {String} contentType entity id on cms
 * @return {Promise} promise containing all entries fetched
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
 * Get a single entry given it's content type
 * @param  {String} id entity id on cms
 * @return {Promise} promise containing entry data
 */
export const getEntry = function(id, args = {}) {
  const client = getClient(spaceID, getAccessToken('production'))
  const thisArgs = {
    ...defaults.query,
    ...args
  }

  return client.getEntry(id, thisArgs)
}

/**
 * Do an ajax request to an specific endpoint
 * @param  {String} endpoint service url
 * @return {Promise} promise containing fetched data
 */
export const doRequest = function(endpoint) {
  // TODO: Add error handling later on
  return fetch(endpoint).then((res) => res.json())
}
