import isNumber from 'lodash/isNumber'

/**
 * [censor description]
 * @param  {[type]} censorObj [description]
 * @return {[type]}           [description]
 */
function censor(censorObj) {
  let i = 0

  return function(key, value) {
    const circular = i !== 0 &&
      typeof censorObj === 'object' &&
      typeof value === 'object' &&
      censorObj === value
    const manyNodes = i >= 150

    if (circular) {
      return '[Circular]'
    }

    if (manyNodes) {
      return '[Unknown]'
    }

    ++i

    return value
  }
}

/**
 * [stringify description]
 * @param  {[type]} obj    [description]
 * @param  {[type]} indent [description]
 * @return {[type]}        [description]
 */
const stringify = function(obj, indent) {
  let thisIndent = indent

  if (!isNumber(indent)) {
    thisIndent = 0
  }

  return JSON.stringify(obj, censor(obj), thisIndent)
}

module.exports = stringify
