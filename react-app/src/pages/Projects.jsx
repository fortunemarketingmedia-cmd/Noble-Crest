import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Cta from '../components/Cta'
import Reveal from '../components/Reveal'
import { IMG } from '../data/images'
import useTitle from '../hooks/useTitle'
import { VERIFIED_PROJECTS } from '../data/config'

const PROPERTY_CATEGORIES = [
  {
    number: '01',
    title: 'Commercial',
    text: 'Offices, retail spaces and other commercial requirements shaped around location, use, access and business priorities.',
    image: IMG.office,
    to: '/projects/commercial',
  },
  {
    number: '02',
    title: 'Residential',
    text: 'Homes and residences considered around lifestyle, location, configuration, budget and long-term priorities.',
    image: IMG.home2,
    to: '/projects/residential',
  },
]

const REQUIREMENT_CATEGORIES = [
  {
    number: '03',
    title: 'For Sale',
    text: 'Guidance for buyers and owners across verified residential and commercial sale opportunities.',
    image: IMG.tower,
    to: '/projects/sale',
  },
  {
    number: '04',
    title: 'For Rent',
    text: 'Rental searches for homes and business spaces, organised around practical needs and timing.',
    image: IMG.living,
    to: '/projects/rent',
  },
  {
    number: '05',
    title: 'For Lease',
    text: 'Structured lease guidance for occupiers and owners, with attention to operational fit and terms.',
    image: IMG.work2,
    to: '/projects/lease',
  },
]

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterValues = ['region', 'jurisdiction', 'city', 'propertyType', 'requirement']
  const filters = Object.fromEntries(filterValues.map((key) => [key, searchParams.get(key) || '']))
  const filteredProjects = VERIFIED_PROJECTS.filter((project) => filterValues.every((key) => !filters[key] || String(project[key] || '').toLowerCase() === filters[key].toLowerCase()))
  const showMaharashtra = (!filters.region || filters.region === 'India') && (!filters.jurisdiction || filters.jurisdiction === 'Maharashtra')
  const showDubai = (!filters.region || filters.region === 'Middle East') && (!filters.jurisdiction || filters.jurisdiction === 'Dubai')
  function updateFilter(key, value) {
    setSearchParams((current) => {
      const next = new URLSearchParams(current)
      if (value) next.set(key, value)
      else next.delete(key)
      if (key === 'region') {
        next.delete('jurisdiction')
        next.delete('city')
      }
      if (key === 'jurisdiction') next.delete('city')
      return next
    })
  }
  useTitle(
    'Properties & Projects in Mumbai, Pune & Dubai | Nobelcrest',
    'Explore residential and commercial property opportunities for sale, rent and lease across Mumbai, Pune and Dubai with Nobelcrest Properties.',
    [{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${window.location.origin}/projects` },
      ],
    }],
    { noindex: VERIFIED_PROJECTS.length === 0 },
  )

  return <>
    <PageHero title="Explore Property with Greater Clarity" sub="Begin with the type of property you need or the transaction you have in mind across Mumbai, Pune and Dubai." img={IMG.home2} crumb="Projects" />

    <section className="projects-overview-intro"><div className="wrap projects-overview-heading">
      <div><span className="eyebrow">Our Property Portfolio</span><h2>Every requirement has a different starting point.</h2></div>
      <p>Nobelcrest brings residential and commercial property conversations into one considered portfolio. Explore by property type, or begin with whether you want to buy, rent or lease.</p>
    </div></section>

    <section className="project-results"><div className="wrap">
      <div className="section-head"><span className="eyebrow">Property Search</span><h2>Browse by market and requirement.</h2></div>
      <form className="filter-panel" onSubmit={(event) => event.preventDefault()}>
        <label>Region<select value={filters.region} onChange={(event) => updateFilter('region', event.target.value)}><option value="">All regions</option><option>India</option><option>Middle East</option></select></label>
        <label>State / Emirate<select value={filters.jurisdiction} onChange={(event) => updateFilter('jurisdiction', event.target.value)}><option value="">All</option>{(!filters.region || filters.region === 'India') && <option value="Maharashtra">Maharashtra</option>}{(!filters.region || filters.region === 'Middle East') && <option value="Dubai">Dubai</option>}</select></label>
        <label>City<select value={filters.city} onChange={(event) => updateFilter('city', event.target.value)}><option value="">All cities</option>{showMaharashtra && <><option>Mumbai</option><option>Pune</option></>}{showDubai && <option>Dubai</option>}</select></label>
        <label>Property Type<select value={filters.propertyType} onChange={(event) => updateFilter('propertyType', event.target.value)}><option value="">Any type</option><option value="residential">Residential</option><option value="commercial">Commercial</option></select></label>
        <label>Requirement<select value={filters.requirement} onChange={(event) => updateFilter('requirement', event.target.value)}><option value="">Any requirement</option><option value="sale">Sale</option><option value="rent">Rent</option><option value="lease">Lease</option></select></label>
      </form>
      {filteredProjects.length ? <div className="cards">{filteredProjects.map((project) => <article className="card" key={project.slug}><img src={project.image} alt={project.imageAlt} loading="lazy" /><div className="b"><p className="eyebrow">{project.city} · {project.propertyType} · {project.requirement}</p><h3>{project.name}</h3><p>{project.description}</p>{(project.configuration || project.area) && <p>{[project.configuration, project.area].filter(Boolean).join(' · ')}</p>}<Link className="text-link" to={`/projects/${project.propertyType}/${project.slug}`}>View Details</Link></div></article>)}</div> : <div className="inventory-empty"><span className="crest-symbol">NC</span><p className="eyebrow">Verified inventory only</p><h3>Project and property listings are pending verified inventory.</h3><p>Search by region, state or emirate, city, property type and requirement. Opportunities will appear after the relevant project details have been confirmed.</p><Link className="btn" to="/contact-us">Tell Us What You Are Looking For</Link></div>}
    </div></section>

    <section className="project-type-section"><div className="wrap">
      <div className="project-section-label"><span>Explore by property type</span><b>01 — 02</b></div>
      <div className="project-type-grid">
        {PROPERTY_CATEGORIES.map((category) => <Reveal as={Link} to={category.to} className="project-overview-card project-overview-card-large" key={category.title}>
          <img src={category.image} alt="" loading="lazy" />
          <span className="project-card-shade" />
          <span className="project-card-number">{category.number}</span>
          <div className="project-card-copy"><p>Property type</p><h3>{category.title}</h3><span>{category.text}</span><b>Explore {category.title} <i>↗</i></b></div>
        </Reveal>)}
      </div>
    </div></section>

    <section className="project-requirement-section"><div className="wrap">
      <div className="project-section-label"><span>Explore by requirement</span><b>03 — 05</b></div>
      <div className="project-requirement-grid">
        {REQUIREMENT_CATEGORIES.map((category) => <Reveal as={Link} to={category.to} className="project-overview-card" key={category.title}>
          <img src={category.image} alt="" loading="lazy" />
          <span className="project-card-shade" />
          <span className="project-card-number">{category.number}</span>
          <div className="project-card-copy"><p>Requirement</p><h3>{category.title}</h3><span>{category.text}</span><b>View opportunities <i>↗</i></b></div>
        </Reveal>)}
      </div>
    </div></section>

    <section className="projects-market-band"><div className="wrap projects-market-layout">
      <div><span className="eyebrow">Markets We Serve</span><h2>Local context across three important property markets.</h2></div>
      <div className="projects-market-list">
        <div><span>01</span><h3>Mumbai</h3><p>Residential and commercial requirements across India’s leading property market.</p></div>
        <div><span>02</span><h3>Pune</h3><p>Homes, investments and business spaces across a fast-evolving urban market.</p></div>
        <div><span>03</span><h3>Dubai</h3><p>Selected residential and commercial opportunities supported by UAE market experience.</p></div>
      </div>
    </div></section>

    <Cta title="Not Sure Where to Begin?" text="Tell us your preferred location, budget and purpose. We will help shape the right property conversation." />
  </>
}
