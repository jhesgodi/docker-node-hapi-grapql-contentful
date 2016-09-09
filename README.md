# Telus / NaaS Project - POC
NaaS project proposed architecture based on: NodeJs + ( HapiJs, GrapQL & Contenful )

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

## Page URL's

*Based on IP address:*
- Loads "Page A" from Contenful by retrieving "localization" and "language" from given "IP address" on the url
`http://localhost:3000/?ip=99.246.28.117`

*Based on url parameters:*

- Page A -> Ontario / English:
http://localhost:3000/ON/en-CA/Page%20A

- Page A -> Ontario / French:
http://localhost:3000/ON/fr-CA/Page%20A

- Page B -> New Brunswick / English:
http://localhost:3000/NB/en-CA/Page%20B

- Page B -> New Brunswick / French:
http://localhost:3000/NB/fr-CA/Page%20B

- Page C -> Saskatchewan / English:
http://localhost:3000/SK/en-CA/Page%20C

- Page C -> New Brunswick / French:
http://localhost:3000/SK/fr-CA/Page%20C

** Note that you can create your own query based on Page `province` and `locale` configuration on Contenful: `http://localhost:3000/{:province}/{:locale}/{:page-name}`
