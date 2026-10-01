export const COMPANY = {
  name: 'Nobelcrest Properties LLP',
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  enquiryEndpoint: import.meta.env.VITE_ENQUIRY_ENDPOINT || '',
  phone: import.meta.env.VITE_PHONE || '',
  whatsapp: import.meta.env.VITE_WHATSAPP || '',
  email: import.meta.env.VITE_EMAIL || '',
  indiaAddress: import.meta.env.VITE_INDIA_ADDRESS || '',
  dubaiAddress: import.meta.env.VITE_DUBAI_ADDRESS || '',
  businessHours: import.meta.env.VITE_BUSINESS_HOURS || '',
  ga4Id: import.meta.env.VITE_GA4_ID || '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || '',
  searchConsoleVerification: import.meta.env.VITE_SEARCH_CONSOLE_VERIFICATION || '',
}

export { PROJECTS, VERIFIED_PROJECTS } from './projects.js'

export async function submitEnquiry(payload) {
  if (!COMPANY.enquiryEndpoint) return { configured: false }
  const response = await fetch(COMPANY.enquiryEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error('Unable to submit the enquiry')
  return { configured: true }
}
