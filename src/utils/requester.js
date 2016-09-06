import { getClient, spaceID, getAccessToken } from '../utils/contentful'

/**
 * [getEntries description]
 * @param  {[type]} contentType [description]
 * @return {[type]}             [description]
 */
export default function getEntries(contentType) {
  const client = getClient(spaceID, getAccessToken('production'))

  return client.getEntries({
    content_type: contentType
  })
}

// TODO: Request single entry
