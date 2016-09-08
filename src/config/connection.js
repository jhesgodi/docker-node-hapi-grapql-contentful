/** @access public */
export const host = '0.0.0.0'

/** @access public */
export const port = process.env.PORT || 3000

/**
 * By default returns connection params object
 * @return {Object} default connection params
 */
export default { host, port }
