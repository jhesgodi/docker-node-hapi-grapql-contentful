/**
 * Endpoint creators
 *
 * @file groups all endpoint helpers in one file, enabling cleaner imports.
 * @example import { gelocalizeIp } from './utils/endpoints/'
 */

/**
 * Returns a geolocalization service url for passed ip address
 * @param  {Number} ip ip address to be consulted
 * @return {String} service url
 */
export const gelocalizeIp = (ip) =>
  `${ip}`

// TODO: Delete later on when more exports are added
export default null
