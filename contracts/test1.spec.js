import { Contract, Joi } from 'consumer-contracts'

/**
 * Contract tests for test a random github account
 * @type {Contract}
 */
module.exports = new Contract({
  name: 'User API',
  consumer: 'GitHub Services',
  request: {
    method: 'GET',
    url: 'https://api.github.com/users/robinjmurphy'
  },
  response: {
    statusCode: 200,
    body: Joi.object().keys({
      login: Joi.string(),
      name: Joi.string(),
      public_repos: Joi.number().integer()
    })
  }
})
