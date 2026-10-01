import { Link, useParams } from 'react-router-dom'
import { PROJECTS } from '../data/config'
import PageHero from '../components/PageHero'
import Cta from '../components/Cta'
import useTitle from '../hooks/useTitle'

export default function ProjectDetail() {
  const { category, slug } = useParams()
  const project = PROJECTS.find((item) => item.slug === slug && (item.propertyType === category || item.requirement === category))
  const schemas = project ? [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` }, { '@type': 'ListItem', position: 2, name: 'Projects', item: `${window.location.origin}/projects` }, { '@type': 'ListItem', position: 3, name: project.name, item: window.location.href }] }] : []
  useTitle(project ? `${project.name} in ${project.location} | ${project.propertyType} | Nobelcrest` : 'Property Not Published | Nobelcrest', project ? project.description : 'This property is not currently published with verified information.', schemas, { noindex: !project })
  if (!project) return <div className="not-found"><div><span className="crest-symbol">NC</span><p className="eyebrow">Verified properties only</p><h1>This property is not currently published.</h1><p>Property pages become available only after the project name, location, specifications, availability, media and regulatory information have been verified.</p><div className="actions"><Link className="btn" to="/projects">Browse Opportunities</Link><Link className="btn line" to="/contact-us">Discuss Your Requirement</Link></div></div></div>
  return <><PageHero title={`${project.name}, ${project.location}`} sub={project.description} img={project.heroImage} crumb={`Projects / ${project.name}`} /><section><div className="wrap project-detail"><div><span className="eyebrow">Property Overview</span><h2>{project.overviewTitle || 'Key property information'}</h2><p>{project.overview}</p>{project.features?.length > 0 && <><h3>Features &amp; Amenities</h3><ul className="check-list light-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></>}</div><aside><h3>Verified Facts</h3><dl>{Object.entries(project.facts || {}).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl><Link className="btn" to={`/contact-us?property=${encodeURIComponent(project.name)}`}>Enquire About This Property</Link></aside></div></section><Cta title="Would You Like to Discuss This Property?" text="Share your requirement and the Nobelcrest team can coordinate the next conversation." /></>
}
