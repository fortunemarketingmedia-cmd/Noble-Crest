import { writeFile, rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const origin = (process.env.VITE_SITE_URL || '').replace(/\/$/, '')
const output = resolve('dist')
const routes = ['/', '/about-us', '/services', '/projects', '/contact-us', '/privacy-policy', '/terms-of-use', '/website-disclaimer']

if (!origin) {
  await rm(resolve(output, 'sitemap.xml'), { force: true })
  await writeFile(resolve(output, 'robots.txt'), 'User-agent: *\nAllow: /\n')
  console.log('SEO: set VITE_SITE_URL to generate the production XML sitemap and sitemap directive.')
} else {
  const urls = routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join('\n')
  await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
  console.log(`SEO: generated sitemap for ${origin}.`)
}
