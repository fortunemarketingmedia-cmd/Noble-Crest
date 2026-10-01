import { Link } from 'react-router-dom'
import PageHero from './PageHero'
import Reveal from './Reveal'
import Cta from './Cta'
import { VERIFIED_PROJECTS } from '../data/config'
import { PROJECT_LINKS } from '../data/site'
import useTitle from '../hooks/useTitle'

export default function ProjectCategoryPage({ config }) {
  const items = VERIFIED_PROJECTS.filter(config.filter)
  useTitle(config.seoTitle, config.metaDescription, [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${window.location.origin}/projects` },
      { '@type': 'ListItem', position: 3, name: config.label, item: window.location.href },
    ],
  }], { noindex: items.length === 0 })

  return <>
    <PageHero title={config.h1} sub={config.heroText} img={config.image} crumb={<><Link to="/projects">Projects</Link> / {config.label}</>} />
    <section><div className="wrap editorial-split">
      <Reveal><span className="eyebrow">{config.eyebrow}</span><h2>{config.introTitle}</h2></Reveal>
      <Reveal><p className="lead">{config.introLead}</p><p>{config.introBody}</p><Link className="text-link" to={`/contact-us?category=${config.slug}`}>Discuss Your Requirement</Link></Reveal>
    </div></section>

    <section className="cream"><div className="wrap"><div className="section-head"><span className="eyebrow">How We Can Help</span><h2>{config.helpTitle}</h2></div><div className="category-points">{config.points.map(([title, text], index) => <Reveal key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>

    <section><div className="wrap"><div className="category-market"><div><span className="eyebrow">Current Market Focus</span><h2>Mumbai, Pune and Dubai.</h2></div><p>{config.marketText}</p></div>{items.length > 0 ? <div className="cards">{items.map((project) => <article className="card" key={project.slug}><img src={project.image} alt={project.imageAlt} /><div className="b"><p className="eyebrow">{project.city} · {project.propertyType} · {project.requirement}</p><h3>{project.name}</h3><p>{project.description}</p>{(project.configuration || project.area) && <p>{[project.configuration, project.area].filter(Boolean).join(' · ')}</p>}<Link className="text-link" to={`/projects/${project.propertyType}/${project.slug}`}>View Details</Link></div></article>)}</div> : <div className="inventory-empty"><span className="crest-symbol">NC</span><p className="eyebrow">Verified inventory only</p><h3>{config.emptyTitle}</h3><p>{config.emptyText}</p><Link className="btn" to={`/contact-us?category=${config.slug}`}>Tell Us What You Are Looking For</Link></div>}
      <div className="related-browse"><h3>Browse Related Property Categories</h3><div className="filter-links">{PROJECT_LINKS.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><h3>Browse by Market</h3><div className="filter-links"><Link to="/projects?city=Mumbai">Mumbai</Link><Link to="/projects?city=Pune">Pune</Link><Link to="/projects?city=Dubai">Dubai</Link><Link to="/contact-us">Contact Nobelcrest</Link></div></div>
    </div></section>

    <section className="dark-section"><div className="wrap category-guidance"><div><span className="eyebrow">Before You Decide</span><h2>{config.guidanceTitle}</h2></div><ul className="check-list">{config.guidance.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <Cta title={config.ctaTitle} text={config.ctaText} />
  </>
}
