import { getClient, spaceID, getAccessToken } from '../utils/contentful'
import { author } from '../utils/entries'

export default (response, reply) => {
  const data = {
    message: 'Requested data:',
    response: {
      json: {
        a: 'key1',
        b: 'key2'
      }
    }
  }
  const client = getClient(spaceID, getAccessToken('production'))

  client.getEntries({
    content_type: author
  })
  .then(function(entries) {
    data.response.items = entries.items;
    reply.view('index', data);
  });
}
