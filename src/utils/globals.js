import { hasOwnProperty } from './helpers'

/** @access private */
const globals = {
  locale: 'en-CA'
}

/**
 * [set description]
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 */
export function set(key, value) {
  if (hasOwnProperty(globals, key)) {
    globals[key] = value
  }
}

/**
 * [get description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export function get(key) {
  return globals[key]
}
