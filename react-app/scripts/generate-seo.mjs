import { writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'
import { VERIFIED_PROJECTS as PROJECTS } from '../src/data/projects.js'

const origin = (process.env.VITE_SITE_URL || '').replace(/\/$/, '')
const output = resolve('dist')
const routes = new Set(['/', '/about-us', '/services', '/contact-us'])
const categories = [
  ['commercial', (project) => project.propertyType === 'commercial'],
  ['residential', (project) => project.propertyType === 'residential'],
  ['sale', (project) => project.requirement === 'sale'],
  ['rent', (project) => project.requirement === 'rent'],
  ['lease', (project) => project.requirement === 'lease'],
]

if (PROJECTS.length) {
  routes.add('/projects')
  for (const [slug, matches] of categories) {
    if (PROJECTS.some(matches)) routes.add(`/projects/${slug}`)
  }
  for (const project of PROJECTS) {
    if (project.slug && ['residential', 'commercial'].includes(project.propertyType)) {
      routes.add(`/projects/${project.propertyType}/${encodeURIComponent(project.slug)}`)
    }
  }
}

if (!origin) {
  await rm(resolve(output, 'sitemap.xml'), { force: true })
  await writeFile(resolve(output, 'robots.txt'), 'User-agent: *\nAllow: /\n')
  console.log('SEO: set VITE_SITE_URL to generate the production XML sitemap and sitemap directive.')
} else {
  const urls = [...routes].map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')
  await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
  console.log(`SEO: generated sitemap for ${origin}.`)
}
