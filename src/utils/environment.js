/** @access private */
const PRODUCTION = process.env.NODE_ENV === 'production'

/**
 * Checks if current env is production or not
 * @access public
 */
export default PRODUCTION

/**
 * Checks if current environment match name passed
 * @param  {String} name environment
 * @return {Boolean} true if the environment name match, false otherwise
 */
export const checkenvironment = (name) => process.env.NODE_ENV === name
