import { useEffect } from 'react'

export default function useTitle(title, description, schemas = [], { noindex = false } = {}) {
  const schemaJson = JSON.stringify(schemas)
  useEffect(() => {
    document.title = title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) { tag = document.createElement('meta'); tag.name = 'description'; document.head.appendChild(tag) }
    tag.content = description
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = `${window.location.origin}${window.location.pathname}`
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots) }
    robots.content = noindex ? 'noindex, follow' : 'index, follow'
    document.querySelectorAll('script[data-nobelcrest-schema]').forEach((node) => node.remove())
    JSON.parse(schemaJson).forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.nobelcrestSchema = 'true'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })
  }, [title, description, noindex, schemaJson])
}
