var contentful = require('contentful')

var contentfulClient = contentful.createClient({
  accessToken: '0e3ec801b5af550c8a1257e8623b1c77ac9b3d8fcfc1b2b7494e3cb77878f92a',
  space: 'wl1z0pal05vy'
})

var PRODUCT_CONTENT_TYPE_ID = '2PqfXUJwE8qSYKuM0U6w8M'

contentfulClient.getEntries({
  content_type: PRODUCT_CONTENT_TYPE_ID
})
.then(function(entries) {
  console.log(entries.items);
})
