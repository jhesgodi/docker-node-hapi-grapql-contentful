import Handlebars from 'handlebars'
import path from 'path'

/** @access private */
export default {
  engines: {
    html: Handlebars
  },
  path: path.resolve(__dirname, '../views'),
  layout: 'default',
  layoutPath: path.resolve(__dirname, '../views/layout'),
  partialsPath: path.resolve(__dirname, '../views/partials'),
  helpersPath: path.resolve(__dirname, '../views/helpers')
}
