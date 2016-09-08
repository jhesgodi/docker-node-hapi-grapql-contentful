/**
 * Global constants helper
 *
 * @file groups all global variables in one file, enabling cleaner imports.
 * @example import * as globals from './utils/globals'
 */

import { hasOwnProperty } from './helpers'

/** @access private */
const globals = {
  locale: 'en-CA'
}

/**
 * Sets a value for a variable
 * @param {String} key variable name
 * @param {String} value variable value
 */
export function set(key, value) {
  if (hasOwnProperty(globals, key)) {
    globals[key] = value
  }
}

/**
 * Gets current valur for variable
 * @param  {String} key variable name
 * @return {*} store value
 */
export function get(key) {
  return globals[key] || undefined
}
