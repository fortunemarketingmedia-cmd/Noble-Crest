import { IMG } from '../data/images'

export const COMMERCIAL = {
  slug: 'commercial', label: 'Commercial', eyebrow: 'Commercial Real Estate', image: IMG.office,
  seoTitle: 'Commercial Property in Mumbai, Pune & Dubai | Nobelcrest',
  metaDescription: 'Explore verified commercial property opportunities for purchase, rent and lease across Mumbai, Pune and Dubai with Nobelcrest Properties.',
  h1: 'Commercial Property Opportunities', heroText: 'Structured guidance for businesses, professionals, investors and owners exploring commercial real estate across Mumbai, Pune and Dubai.',
  introTitle: 'A practical framework for commercial property decisions.', introLead: 'Commercial property requirements are shaped by how a space needs to perform.', introBody: 'Location, access, permitted use, configuration, area, commercial terms and timing can all influence the right option. Nobelcrest begins with the operating requirement before identifying relevant opportunities.',
  helpTitle: 'Support shaped around commercial priorities.', points: [['Requirement Discovery', 'Clarify intended use, preferred market, size, configuration, timing and commercial priorities.'], ['Opportunity Shortlisting', 'Identify relevant office, retail or other commercial opportunities from verified inventory.'], ['Discussion & Coordination', 'Coordinate property information, visits and next-step conversations with clear communication.']],
  marketText: 'Commercial enquiries are currently considered across Mumbai, Pune and Dubai, subject to verified availability and the property requirements being handled by the team.',
  emptyTitle: 'Commercial opportunities are being verified.', emptyText: 'Listings will be published only after the property type, location, use, area, commercial terms, availability and applicable regulatory information have been confirmed.',
  guidanceTitle: 'Evaluate the space, terms and intended use together.', guidance: ['Confirm the permitted and practical use of the property.', 'Review area, access, configuration and business requirements.', 'Verify commercial terms, availability and documentation.', 'Obtain specialist legal, tax or financial advice where required.'],
  ctaTitle: 'Looking for Commercial Property?', ctaText: 'Share the location, intended use, approximate area and whether you want to buy, rent or lease.', filter: (p) => p.propertyType === 'commercial',
}

export const RESIDENTIAL = {
  slug: 'residential', label: 'Residential', eyebrow: 'Residential Real Estate', image: IMG.home2,
  seoTitle: 'Residential Property in Mumbai, Pune & Dubai | Nobelcrest',
  metaDescription: 'Explore verified residential property opportunities across Mumbai, Pune and Dubai with personalised buying, selling and rental guidance from Nobelcrest.',
  h1: 'Residential Property Opportunities', heroText: 'Personalised guidance for homebuyers, owners and tenants exploring residential real estate across Mumbai, Pune and Dubai.',
  introTitle: 'Start with how the property needs to fit your life.', introLead: 'A residential decision involves more than configuration and price.', introBody: 'Location, commute, lifestyle, family needs, intended use, budget and timing all matter. Nobelcrest structures the conversation around these priorities before relevant homes are shortlisted.',
  helpTitle: 'Residential guidance centred on your requirement.', points: [['Buying a Home', 'Organise the search around location, lifestyle needs, configuration, budget and timing.'], ['Selling a Property', 'Present verified property information and coordinate relevant buyer conversations.'], ['Rental Requirements', 'Support owners and people looking to rent with clear requirement and property coordination.']],
  marketText: 'Residential enquiries are currently considered across Mumbai, Pune and Dubai, subject to verified inventory and availability at the time of enquiry.',
  emptyTitle: 'Residential opportunities are being verified.', emptyText: 'Homes will appear here only after location, configuration, area, availability, media, pricing and relevant regulatory information have been confirmed.',
  guidanceTitle: 'Look beyond the first impression.', guidance: ['Define the purpose, budget, preferred location and timeline.', 'Review configuration, usable space and practical lifestyle needs.', 'Verify pricing, availability, approvals and property documents.', 'Seek qualified advice where legal, tax or financing questions arise.'],
  ctaTitle: 'Tell Us What Home You Are Looking For', ctaText: 'Share your preferred market, configuration, budget and timeline so the team can understand your requirement.', filter: (p) => p.propertyType === 'residential',
}

export const SALE = {
  slug: 'sale', label: 'Sale', eyebrow: 'Buy or Sell Property', image: IMG.tower,
  seoTitle: 'Property for Sale in Mumbai, Pune & Dubai | Nobelcrest',
  metaDescription: 'Explore verified residential and commercial properties for sale in Mumbai, Pune and Dubai, or discuss selling your property with Nobelcrest.',
  h1: 'Property Opportunities for Sale', heroText: 'Guidance for buyers and property owners across verified residential and commercial sale opportunities in Mumbai, Pune and Dubai.',
  introTitle: 'Bring clarity to a property purchase or sale.', introLead: 'Buying and selling both begin with accurate information and a clear objective.', introBody: 'Nobelcrest helps buyers define their search and helps owners structure the property conversation. Details, media and claims must be verified before any opportunity is published or circulated.',
  helpTitle: 'Support on both sides of the sale conversation.', points: [['Buyer Requirements', 'Understand location, property type, purpose, budget, timeline and priorities.'], ['Owner Requirements', 'Understand the property, intended sale and the buyer conversation required.'], ['Next-Step Coordination', 'Support shortlisting, information exchange, property discussions and visits.']],
  marketText: 'Sale requirements are currently considered across Mumbai, Pune and Dubai for residential and commercial property, subject to verified inventory.',
  emptyTitle: 'Properties for sale are being verified.', emptyText: 'Sale opportunities will be published only when ownership or project information, pricing, specifications, availability, media and required regulatory details have been confirmed.',
  guidanceTitle: 'Use verified information before making a commitment.', guidance: ['Confirm the property identity, location and current availability.', 'Review specifications, pricing and commercial terms.', 'Verify ownership, approvals and applicable registration information.', 'Use qualified professionals for legal, tax and financial advice.'],
  ctaTitle: 'Looking to Buy or Sell?', ctaText: 'Tell Nobelcrest about the property, market, budget and timing involved in your requirement.', filter: (p) => p.requirement === 'sale',
}

export const RENT = {
  slug: 'rent', label: 'Rent', eyebrow: 'Rental Property', image: IMG.living,
  seoTitle: 'Property for Rent in Mumbai, Pune & Dubai | Nobelcrest',
  metaDescription: 'Explore verified residential and commercial rental opportunities across Mumbai, Pune and Dubai with Nobelcrest Properties.',
  h1: 'Property Opportunities for Rent', heroText: 'Guided residential and commercial rental conversations for tenants, occupiers and property owners across Mumbai, Pune and Dubai.',
  introTitle: 'Match the rental to the real requirement.', introLead: 'The right rental depends on intended use, location, timing and practical terms.', introBody: 'Nobelcrest helps organise rental enquiries around what the tenant or occupier needs while also supporting owners who want to discuss verified rental opportunities.',
  helpTitle: 'A more structured rental search.', points: [['Tenant Discovery', 'Clarify market, property type, use, budget, move-in timing and key requirements.'], ['Owner Coordination', 'Collect and verify the information needed to present a rental property accurately.'], ['Property Discussions', 'Coordinate relevant options, visits and the next-stage conversation.']],
  marketText: 'Residential and commercial rental enquiries are currently considered across Mumbai, Pune and Dubai, subject to available and verified properties.',
  emptyTitle: 'Rental opportunities are being verified.', emptyText: 'Rental listings will appear only after location, property details, intended use, availability, commercial terms and media have been confirmed.',
  guidanceTitle: 'Clarify the practical and commercial details.', guidance: ['Confirm location, intended use and move-in timeline.', 'Review configuration, condition and inclusions.', 'Understand rent, deposits and other applicable terms.', 'Verify documentation and obtain specialist advice where necessary.'],
  ctaTitle: 'Searching for a Rental Property?', ctaText: 'Share the market, property type, intended use, budget and preferred move-in timing.', filter: (p) => p.requirement === 'rent',
}

export const LEASE = {
  slug: 'lease', label: 'Lease', eyebrow: 'Property Leasing', image: IMG.work2,
  seoTitle: 'Commercial Property for Lease in Mumbai, Pune & Dubai | Nobelcrest',
  metaDescription: 'Explore verified commercial and residential property lease opportunities across Mumbai, Pune and Dubai with Nobelcrest Properties.',
  h1: 'Property Opportunities for Lease', heroText: 'Structured lease guidance for businesses, occupiers and owners across commercial and selected residential requirements.',
  introTitle: 'Approach a lease with the full requirement in view.', introLead: 'A lease decision brings together the space, intended use and commercial terms.', introBody: 'Nobelcrest helps define the location, property type, configuration, area, timing and operational priorities before coordinating relevant lease opportunities.',
  helpTitle: 'Lease support from requirement to discussion.', points: [['Occupier Requirements', 'Define the intended use, location, area, layout, timing and practical priorities.'], ['Owner Requirements', 'Verify property information and understand the kind of occupier or lease conversation required.'], ['Visit & Discussion Coordination', 'Support relevant property visits, information exchange and next steps.']],
  marketText: 'Lease requirements are currently considered across Mumbai, Pune and Dubai, particularly for commercial property, subject to verified availability.',
  emptyTitle: 'Lease opportunities are being verified.', emptyText: 'Properties will appear here only after use, area, location, availability, lease terms, media and relevant property information have been confirmed.',
  guidanceTitle: 'Review operational fit alongside lease terms.', guidance: ['Confirm intended use and whether the space supports it.', 'Review configuration, access, services and occupancy timing.', 'Understand rent, deposits, lock-in and other applicable terms.', 'Verify documentation and seek qualified professional advice where needed.'],
  ctaTitle: 'Discuss Your Lease Requirement', ctaText: 'Share the location, intended use, approximate area and timing with the Nobelcrest team.', filter: (p) => p.requirement === 'lease',
}
