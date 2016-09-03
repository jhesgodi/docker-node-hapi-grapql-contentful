import contentful from 'contentful'

/** @access private */
export const spaceID = 'wl1z0pal05vy'

/** @access private */
export const accessKeys = {
  preview: '',
  production: '0e3ec801b5af550c8a1257e8623b1c77ac9b3d8fcfc1b2b7494e3cb77878f92a'
}

/**
 * Get accessToken from accessKeys, according to passed enviroment
 * @param  {String} [env='preview'] enviroments to be use
 * @return {String} API key for the passed enviroment if exists, empty otherwise
 */
export const getAccessToken = (env = 'preview') => accessKeys[env] || '';

/**
 * Contenful API client handler for ajax requests
 * @type {Object}
 */
export const getClient = (space, accessToken) => contentful.createClient({
  space,
  accessToken
})
