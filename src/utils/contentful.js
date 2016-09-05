import contentful from 'contentful'

/** @access private */
export const spaceID = 'pm9znv9nlk06'

/** @access private */
export const accessKeys = {
  preview: 'beab0c26a68c8af3549685794ccc9c48b6a4eb0f96981c847269ee290157b91f',
  production: 'd727dc64c084462676538fdcf02e2f72d6470e837359f2fea38276604c93b4bb'
}

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
