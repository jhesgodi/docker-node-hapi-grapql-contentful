/** @access private */
export const host = 'localhost'

/** @access private */
export const port = process.env.PORT || 3000

/**
 * By default returns connection params object
 * @return {Object} default connection params
 */
export default { host, port }
