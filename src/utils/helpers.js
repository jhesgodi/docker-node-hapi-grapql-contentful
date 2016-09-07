/**
 * Empty function. Used by other functions that need a callback
 * that does nothing.
 * @return {Null} Nothing
 */
export function noop() {}

/**
 * [hasOwnProperty description]
 * @param  {[type]}  object [description]
 * @param  {[type]}  key    [description]
 * @return {Boolean}        [description]
 */
export function hasOwnProperty(object, key) {
  return {}.hasOwnProperty.call(object, key)
}
