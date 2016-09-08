import contentful from 'contentful'
import { spaceID, accessKeys } from '../config/contentful'

/**
 * Get accessToken from accessKeys, according to passed environment
 * @param  {String} [env='preview'] environments to be use
 * @return {String} API key for the passed environment if exists, empty otherwise
 */
export const getAccessToken = (env = 'preview') => accessKeys[env] || ''

/**
 * Contenful API client handler for ajax requests
 * @type {Object}
 */
export const getClient = (
  space = spaceID,
  accessToken = accessKeys.preview
) => contentful.createClient({
  space,
  accessToken
})
