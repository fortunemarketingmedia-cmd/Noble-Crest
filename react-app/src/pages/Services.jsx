import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'
import Cta from '../components/Cta'
import { SERVICES } from '../data/site'
import { IMG } from '../data/images'
import useTitle from '../hooks/useTitle'

const FAQS = [
  ['Does Nobelcrest help with both buying and selling property?', 'Yes. Nobelcrest supports clients exploring purchases as well as property owners looking to sell, subject to the locations and opportunities being handled by the team.'],
  ['Can I contact Nobelcrest for rental or lease requirements?', 'Yes. Share the location, property type, intended use and key requirements so the team can understand what you are looking for.'],
  ['Which Indian cities does Nobelcrest currently focus on?', 'The current India focus is Maharashtra, primarily Mumbai and Pune.'],
  ['Does Nobelcrest work with Dubai real estate?', 'Yes. Dubai is the primary Middle East market identified for Nobelcrest, supported by team experience in the UAE real estate sector.'],
  ['Can Nobelcrest advise me on legal, tax or investment returns?', 'Nobelcrest does not present legal, tax or return guarantees. Clients should consult an appropriately qualified professional where specialist advice is required.'],
]

export default function Services() {
  useTitle('Real Estate Services | Buy, Sell, Rent & Lease | Nobelcrest', 'Real estate guidance for residential and commercial properties across Mumbai, Pune and Dubai, including buying, selling, renting, leasing and property advisory.', [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` }, { '@type': 'ListItem', position: 2, name: 'Our Services', item: window.location.href }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ])
  return <>
    <PageHero title="Real Estate Services Built Around Your Next Move" sub="Professional support for residential and commercial property requirements across Mumbai, Pune and Dubai." img={IMG.work2} crumb="Our Services" />
    <section><div className="wrap editorial-split"><Reveal><span className="eyebrow">Professional Support</span><h2>Every requirement begins with a different objective.</h2></Reveal><Reveal><p className="lead">You may be looking for a home, planning to sell, searching for commercial space or evaluating rental and lease options.</p><p>Nobelcrest provides a structured point of contact, helping clients understand available opportunities and coordinate next steps with greater clarity.</p></Reveal></div></section>
    <section className="cream"><div className="wrap"><div className="services-list">{SERVICES.map(([title, copy], i) => <Reveal className="service-row" key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{copy}</p>{i === 0 && <Link className="text-link" to="/contact-us">Discuss your requirement</Link>}{i === 1 && <Link className="text-link" to="/projects/sale">Explore properties for sale</Link>}{i === 4 && <Link className="text-link" to="/projects/residential">View residential opportunities</Link>}{i === 5 && <Link className="text-link" to="/projects/commercial">View commercial opportunities</Link>}</div></Reveal>)}</div></div></section>
    <section><div className="wrap faq-layout"><div><span className="eyebrow">Services FAQ</span><h2>Useful answers before you enquire.</h2></div><FAQ items={FAQS} /></div></section>
    <Cta title="Not Sure Which Service Fits?" text="Start with the property need, not the category. Tell us the location, purpose and property type you are considering." />
  </>
}
