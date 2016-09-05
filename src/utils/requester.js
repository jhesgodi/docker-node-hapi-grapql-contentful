import { getClient, spaceID, getAccessToken } from '../utils/contentful'

export default function getEntries(contentType) {
  const client = getClient(spaceID, getAccessToken('production'))

  return client.getEntries({
    content_type: contentType
  });
}
