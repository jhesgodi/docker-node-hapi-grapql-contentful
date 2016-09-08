# Example of query for pages on GraphiQL

{
  pages(id: "page", province: "04") {
    id
    name
    locale
    modules {
      id
      type
      title
      description
      image {
        id
        type
        title
        description
        url
      }
      ... on ArticleType {
        style
        cta
      }
      provinces {
        id
        name
      }
    }
  }
}

# Page URLs
