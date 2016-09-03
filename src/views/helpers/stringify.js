import isNumber from 'lodash/isNumber';

/**
 * [stringify description]
 * @param  {[type]} obj    [description]
 * @param  {[type]} indent [description]
 * @return {[type]}        [description]
 */
const stringify = function(obj, indent) {
  let thisIndent = indent

  if (!isNumber(indent)) {
    thisIndent = 0;
  }

  return JSON.stringify(obj, null, thisIndent);
}

module.exports = stringify;
