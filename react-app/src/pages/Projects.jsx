import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Cta from '../components/Cta'
import Reveal from '../components/Reveal'
import { IMG } from '../data/images'
import useTitle from '../hooks/useTitle'

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
  )

  return <>
    <PageHero title="Explore Property with Greater Clarity" sub="Begin with the type of property you need or the transaction you have in mind across Mumbai, Pune and Dubai." img={IMG.home2} crumb="Projects" />

    <section className="projects-overview-intro"><div className="wrap projects-overview-heading">
      <div><span className="eyebrow">Our Property Portfolio</span><h2>Every requirement has a different starting point.</h2></div>
      <p>Nobelcrest brings residential and commercial property conversations into one considered portfolio. Explore by property type, or begin with whether you want to buy, rent or lease.</p>
    </div></section>

    <section className="project-type-section"><div className="wrap">
      <div className="project-section-label"><span>Explore by property type</span><b>01 — 02</b></div>
      <div className="project-type-grid">
        {PROPERTY_CATEGORIES.map((category) => <Reveal as={Link} to={category.to} className="project-overview-card project-overview-card-large" key={category.title}>
          <img src={category.image} alt={`${category.title} property`} loading="lazy" />
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
          <img src={category.image} alt={`${category.title} property opportunities`} loading="lazy" />
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
