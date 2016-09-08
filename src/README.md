# Example of query for pages

{
  pages(id: "page", province: "04") {
    id
    name
    locale
    modules {
      id
      type
      title
      ... on ArticleType {
        description
      }
      image {
        id
        type
        title
        description
        url
      }
    }
  }
}
