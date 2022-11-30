export const api = {
  icon: '🚀',
  name: 'title.case.do',
  description: 'TitleCaseKeys Transformation API',
  url: 'https://title.case.do/api',
  type: 'https://apis.do/transformation',
  endpoints: {
    listCategories: 'https://title.case.do/api',
    getCategory: 'https://title.case.do/:type',
  },
  site: 'https://title.case.do',
  login: 'https://title.case.do/login',
  signup: 'https://title.case.do/signup',
  subscribe: 'https://title.case.do/subscribe',
  repo: 'https://github.com/drivly/title.case.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://title.case.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
