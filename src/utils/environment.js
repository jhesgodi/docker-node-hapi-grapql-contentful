/** @access private */
const PRODUCTION = process.env.NODE_ENV === 'production'

/**
 * Checks if current env is production or not
 */
export default PRODUCTION

/**
 * Checks if current enviroment match name passed
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const checkEnviroment = (name) => process.env.NODE_ENV === name
