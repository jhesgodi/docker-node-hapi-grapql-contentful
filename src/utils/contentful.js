import contentful from 'contentful'
import { spaceID, accessKeys } from '../config/contentful'

/**
 * Contenful Query defaults
 */
export { queryDefaults } from '../config/contentful'

/**
 * Get accessToken from accessKeys, according to passed enviroment
 * @param  {String} [env='preview'] enviroments to be use
 * @return {String} API key for the passed enviroment if exists, empty otherwise
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
