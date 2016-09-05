import { Contract, Joi } from 'consumer-contracts'

export default new Contract({
  name: 'User API',
  consumer: 'GitHub Services',
  request: {
    method: 'GET',
    url: 'https://api.github.com/users/jhesgonzalez'
  },
  response: {
    statusCode: 200,
    body: Joi.object().keys({
      login: Joi.string(),
      name: Joi.optional(),
      public_repos: Joi.number().integer()
    })
  }
})
