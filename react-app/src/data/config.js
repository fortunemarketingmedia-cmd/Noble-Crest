export const COMPANY = {
  name: 'Nobelcrest Properties LLP',
  reraNumber: 'A061262604735',
  siteUrl: import.meta.env.VITE_SITE_URL || '',
  enquiryEndpoint: import.meta.env.VITE_ENQUIRY_ENDPOINT || '',
  phone: import.meta.env.VITE_PHONE || '9860834200',
  phones: ['9860834200', '9665934200'],
  whatsapp: import.meta.env.VITE_WHATSAPP || '9860834200',
  email: import.meta.env.VITE_EMAIL || '',
  indiaAddress: import.meta.env.VITE_INDIA_ADDRESS || 'Solitaire Business Hub, 2nd Floor, Office No. 205, Kalyani Nagar, Pune.',
  dubaiAddress: import.meta.env.VITE_DUBAI_ADDRESS || '',
  businessHours: import.meta.env.VITE_BUSINESS_HOURS || '',
  propertyTypes: ['Residential', 'Commercial', 'Industrial'],
  ga4Id: import.meta.env.VITE_GA4_ID || '',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || '',
  searchConsoleVerification: import.meta.env.VITE_SEARCH_CONSOLE_VERIFICATION || '',
}

export const PROJECTS = []

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
