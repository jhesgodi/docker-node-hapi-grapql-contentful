/**
 * [ifEqual description]
 * @param  {[type]} obj    [description]
 * @param  {[type]} indent [description]
 * @return {[type]}        [description]
 */
const ifEqual = function(item, comparator, options) {
  let result;

  if (item === comparator) {
    result = options.fn(this);
  } else {
    result = options.inverse(this);
  }

  return result;
}

module.exports = ifEqual
