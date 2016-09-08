/**
 * Helpers
 *
 * @file groups all helpers in one file, enabling cleaner imports.
 * @example import { noop, hasOwnProperty } from './utils/helpers/'
 */

/**
 * Empty function. Used by other functions that need a callback
 * that does nothing.
 * @return {Null} Nothing
 */
export function noop() {}

/**
 * HasOwnProperty helper
 * @param  {Object}  object object to be tested
 * @param  {String}  key key to be found
 * @return {Boolean} true if key was found, false otherwise
 */
export function hasOwnProperty(object, key) {
  return {}.hasOwnProperty.call(object, key)
}
