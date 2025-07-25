// src/utils/seo.js

export function setSEO({ title, description, keywords, og = {}, twitter = {}, canonical, jsonld }) {
  if (title) document.title = title
  if (description) {
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = description
  }
  if (keywords) {
    let kw = document.querySelector('meta[name="keywords"]')
    if (!kw) {
      kw = document.createElement('meta')
      kw.name = 'keywords'
      document.head.appendChild(kw)
    }
    kw.content = keywords
  }
  // Open Graph
  Object.entries(og).forEach(([k, v]) => {
    if (!v) return
    let el = document.querySelector(`meta[property='og:${k}']`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('property', `og:${k}`)
      document.head.appendChild(el)
    }
    el.setAttribute('content', v)
  })
  // Twitter Card
  Object.entries(twitter).forEach(([k, v]) => {
    if (!v) return
    let el = document.querySelector(`meta[name='twitter:${k}']`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('name', `twitter:${k}`)
      document.head.appendChild(el)
    }
    el.setAttribute('content', v)
  })
  // Canonical
  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }
  // JSON-LD
  if (jsonld) {
    let ld = document.getElementById('seo-jsonld')
    if (ld) ld.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'seo-jsonld'
    script.textContent = typeof jsonld === 'string' ? jsonld : JSON.stringify(jsonld)
    document.head.appendChild(script)
  }
} 