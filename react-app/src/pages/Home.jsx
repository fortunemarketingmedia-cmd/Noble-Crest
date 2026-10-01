import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import FAQ from '../components/FAQ'
import Cta from '../components/Cta'
import PropertySearch from '../components/PropertySearch'
import { EnquireLink } from '../components/EnquireModal'
import { HOME_FAQS, MARKET_CARDS, SERVICES, LEADERS } from '../data/site'
import { IMG } from '../data/images'
import useTitle from '../hooks/useTitle'

const JOURNEY = [
  ['01', 'Define', 'Clarify the market, purpose, property type, budget and timing behind the requirement.'],
  ['02', 'Discover', 'Review relevant, verified opportunities rather than an unstructured volume of listings.'],
  ['03', 'Evaluate', 'Discuss practical details, ask the right questions and compare the options with greater context.'],
  ['04', 'Coordinate', 'Arrange conversations, visits and next steps through one professional point of contact.'],
]

export default function Home() {
  useTitle('Nobelcrest Properties | Real Estate Consultancy in India & Dubai', 'Explore residential and commercial real estate opportunities across Mumbai, Pune and Dubai with Nobelcrest Properties. Transparent guidance for buying, selling, renting and leasing.', [
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'Nobelcrest Properties LLP', url: window.location.origin, description: 'Relationship-driven real estate consultancy serving residential and commercial property requirements across India and Dubai.', areaServed: ['Mumbai', 'Pune', 'Dubai'] },
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Nobelcrest Properties LLP', url: window.location.origin },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: HOME_FAQS.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
  ])
  return <>
    <div className="home-hero hero-modern" style={{ backgroundImage: `url(${IMG.glass})` }}>
      <div className="hero-grain" />
      <div className="wrap hero-copy"><div className="hero-serial"><span>NCP</span><i /> <span>IND · UAE</span></div><p className="hero-kicker">A considered approach to real estate</p><h1><span>Real Estate Guidance</span><em>Across India &amp; Dubai</em></h1><h2 className="hero-supporting-title">Property Decisions Deserve More Than a Listing</h2><p>Nobelcrest Properties LLP helps clients explore residential and commercial real estate opportunities across India and Dubai with clear guidance, market understanding and a professional, relationship-led approach.</p><p>Whether you are looking to buy, sell, rent or lease, our team works to understand your requirement and connect you with relevant opportunities while keeping communication transparent at every stage.</p><div className="actions"><Link className="btn" to="/projects">Explore Properties</Link><EnquireLink className="btn ghost">Speak With Our Team</EnquireLink></div></div>
      <div className="hero-side-note"><span>Scroll to discover</span><i /></div>
    </div>
    <div className="search-shell"><div className="wrap"><PropertySearch /></div></div>

    <div className="brand-marquee" aria-hidden="true"><div><span>Residential</span><i>✦</i><span>Commercial</span><i>✦</i><span>Mumbai</span><i>✦</i><span>Pune</span><i>✦</i><span>Dubai</span><i>✦</i><span>Buy</span><i>✦</i><span>Sell</span><i>✦</i><span>Rent</span><i>✦</i><span>Lease</span><i>✦</i><span>Residential</span><i>✦</i><span>Commercial</span></div></div>

    <section className="intro-statement"><div className="wrap editorial-split">
      <Reveal><span className="eyebrow">Nobelcrest Properties LLP</span><h2>Clarity starts with your requirement.</h2></Reveal>
      <Reveal><p className="lead">Property decisions are rarely one-size-fits-all. Location, purpose, budget, timing and long-term plans all matter.</p><p>Nobelcrest brings these factors together to help clients evaluate opportunities with greater clarity. We understand the requirement, present relevant options and coordinate the conversation professionally from enquiry onward.</p><Link className="text-link" to="/about-us">Discover our approach</Link></Reveal>
    </div></section>

    <section className="preview-section"><div className="wrap"><div className="section-head row-head"><div><span className="eyebrow">Our Approach</span><h2>A Clearer Way to Navigate Real Estate</h2><p>Property decisions are rarely one-size-fits-all. We bring location, purpose, budget, timing and long-term plans together to help clients evaluate opportunities with greater clarity.</p></div><Link className="text-link" to="/about-us">Know More About Nobelcrest</Link></div><div className="values-row home-values-row"><Reveal><h3>Informed Counsel</h3><p>Understand the options before making a property decision.</p></Reveal><Reveal><h3>Complete Transparency</h3><p>Clear communication about opportunities, requirements and next steps.</p></Reveal><Reveal><h3>Long-Term Relationships</h3><p>Professional guidance built around the client relationship.</p></Reveal></div><p className="demo-disclaimer">Our current focus is Maharashtra, primarily Mumbai and Pune, and Dubai. Property opportunities will appear after inventory details are verified.</p></div></section>

    <section className="markets-section market-editorial"><div className="wrap"><div className="section-head"><span className="eyebrow">Our Markets</span><h2>Two markets.<br /><em>One point of view.</em></h2></div><div className="market-grid">{MARKET_CARDS.map((market, index) => <Reveal className="market-card" key={market.title}><img src={market.image} alt="" /><div className="market-number">0{index + 1}</div><div className="market-content"><span>{index === 0 ? 'Maharashtra' : 'United Arab Emirates'}</span><h3>{market.title}</h3><p>{market.detail}</p><Link to={`/projects?${market.title === 'India' ? 'region=India' : 'city=Dubai'}`}>Explore Projects ↗</Link></div></Reveal>)}</div></div></section>

    <section className="journey-section"><div className="wrap journey-layout"><div className="journey-sticky"><span className="eyebrow">The Nobelcrest Method</span><h2>Guidance that moves at the pace of the decision.</h2><p>Clear stages, relevant information and no unnecessary pressure.</p><EnquireLink className="text-link">Start your requirement</EnquireLink></div><div className="journey-cards">{JOURNEY.map(([number, title, copy]) => <Reveal key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div></div></section>

    <section className="services-modern"><div className="wrap"><div className="section-head row-head"><div><span className="eyebrow">How Nobelcrest Can Help</span><h2>Expertise for every side of the move.</h2></div><Link className="text-link" to="/services">View Our Services</Link></div><div className="service-list-modern">{SERVICES.map(([title, copy], index) => <Reveal as={Link} to="/services" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></Reveal>)}</div></div></section>

    <section className="dark-section why-modern"><div className="wrap"><div className="why-title"><span className="eyebrow">Why Nobelcrest</span><h2>A relationship-led advisory, designed around better decisions.</h2></div><div className="why-grid"><Reveal><strong>01</strong><h3>Context first</h3><p>We begin with the purpose and priorities behind the requirement—not the first available listing.</p></Reveal><Reveal><strong>02</strong><h3>Verified detail</h3><p>Property information is published and circulated only when it has been checked against supplied sources.</p></Reveal><Reveal><strong>03</strong><h3>Cross-market perspective</h3><p>Experience across India and the UAE supports clearer conversations across Mumbai, Pune and Dubai.</p></Reveal><Reveal><strong>04</strong><h3>One professional connection</h3><p>From initial enquiry to coordinated next steps, communication stays structured and personal.</p></Reveal></div></div></section>

    <section className="leadership-section"><div className="wrap"><div className="section-head row-head"><div><span className="eyebrow">Leadership &amp; Team</span><h2>Experience behind every conversation.</h2></div><Link className="text-link" to="/about-us">Meet our team</Link></div><div className="leadership-preview">{LEADERS.map((person, index) => <Reveal key={person.name}><div className="leader-initial">{person.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div><span>0{index + 1}</span><p>{person.role}</p><h3>{person.name}</h3><strong>{person.experience}</strong></Reveal>)}</div></div></section>

    <section className="insight-band"><div className="wrap"><div><span className="eyebrow">A Useful Starting Point</span><h2>Know what to ask before you shortlist.</h2></div><div className="insight-links"><Link to="/services"><span>01</span><b>How our advisory process works</b><i>↗</i></Link><Link to="/projects"><span>02</span><b>Browse by property requirement</b><i>↗</i></Link><Link to="/contact-us"><span>03</span><b>Prepare your property enquiry</b><i>↗</i></Link></div></div></section>

    <section className="faq-section"><div className="wrap faq-layout"><div><span className="eyebrow">Frequently Asked Questions</span><h2>Start with a clearer view.</h2><p>Simple answers to the questions clients most often ask before beginning a property conversation.</p></div><FAQ items={HOME_FAQS} /></div></section>
    <Cta title="Your Next Property Move Starts With a Clearer Conversation." text="Tell us the market, property type and purpose you have in mind. We will help you understand the next step." />
  </>
}
