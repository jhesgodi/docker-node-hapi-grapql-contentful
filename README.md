# HapiJs GrapQL POC
NodeJs + ( HapiJs, GrapQL & Contenful )

## Install & Run
Simply run ```npm i && npm start``` on project root folder

## GraphiQL
* To open GraphiQL query interface, go to route `http://localhost:3000/graphql`

* Example of query for pages on GraphiQL
```
{
  pages(id: "page", province: "ON") {
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
        ctaCopy
        ctaUrl
      }
      provinces {
        id
        name
      }
    }
  }
}
```
