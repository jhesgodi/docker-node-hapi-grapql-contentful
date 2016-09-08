import isProduction from '../utils/environment'

/**
 * By default returns good console params object
 * @return {Object} default logger params
 */
export default {
  ops: {
    interval: 50000
  },
  reporters: {
    console: [
      {
        module: 'good-console',
        args: [{
          log: isProduction ? 'error' : '*',
          response: '*',
          format: 'ddd, MMM Do YYYY, h:mm:ss a',
          utc: false
        }]
      },
      'stdout'
    ]
  }
}
