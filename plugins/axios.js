import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions'

function parseLinkHeader (linkHeader) {
  let arrData = linkHeader.split('link:')
  linkHeader = arrData.length === 2 ? arrData[1] : linkHeader
  const parsedHeader = {}

  arrData = linkHeader.split(',')

  for (const h of arrData) {
    const linkInfo = /<([^>]+)>;\s+rel="([^"]+)"/ig.exec(h)

    parsedHeader[linkInfo[2]] = linkInfo[1]
  }

  return parsedHeader
}

export default function ({ $axios, app }) {
  const defaults = app.$axios.defaults

  // https://github.com/kuitos/axios-extensions
  defaults.adapter = throttleAdapterEnhancer(cacheAdapterEnhancer(defaults.adapter, true))

  $axios.onResponse((response) => {
    if (!response.data.links && response.headers.link) {
      response.data = { data: response.data, links: parseLinkHeader(response.headers.link) }
    }
  })
}
