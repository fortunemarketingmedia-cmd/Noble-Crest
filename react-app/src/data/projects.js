// Add only project and property records whose published details have been verified.
export const PROJECTS = []

const REQUIRED_PROJECT_FIELDS = ['name', 'slug', 'region', 'jurisdiction', 'city', 'propertyType', 'requirement', 'description', 'image', 'imageAlt', 'location', 'heroImage', 'overview']

export const VERIFIED_PROJECTS = PROJECTS.filter((project) => project.verified === true
  && REQUIRED_PROJECT_FIELDS.every((field) => typeof project[field] === 'string' && project[field].trim())
  && ['India', 'Middle East'].includes(project.region)
  && ['Maharashtra', 'Dubai'].includes(project.jurisdiction)
  && ['Mumbai', 'Pune', 'Dubai'].includes(project.city)
  && ['residential', 'commercial'].includes(project.propertyType)
  && ['sale', 'rent', 'lease'].includes(project.requirement)
  && project.facts && typeof project.facts === 'object' && !Array.isArray(project.facts) && Object.keys(project.facts).length > 0)
