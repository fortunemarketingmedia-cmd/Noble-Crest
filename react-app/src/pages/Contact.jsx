import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { IMG } from '../data/images'
import { COMPANY, submitEnquiry } from '../data/config'
import useTitle from '../hooks/useTitle'

export default function Contact() {
  const [params] = useSearchParams()
  const context = params.get('property') || params.get('category') || ''
  const [status, setStatus] = useState('idle')
  const openedAt = useRef(0)
  useEffect(() => { openedAt.current = Date.now() }, [])
  useTitle('Contact Nobelcrest Properties | India & Dubai Real Estate', 'Speak with Nobelcrest Properties about residential or commercial property requirements in Mumbai, Pune or Dubai. Enquire about buying, selling, renting or leasing.', [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: window.location.href }] }])

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website || Date.now() - openedAt.current < 2500) return
    setStatus('sending')
    try {
      const result = await submitEnquiry({ ...data, context, source: window.location.href })
      setStatus(result.configured ? 'success' : 'unavailable')
      if (result.configured) form.reset()
    } catch { setStatus('error') }
  }

  const direct = [COMPANY.phone && ['Phone', <a href={`tel:${COMPANY.phone}`} key="phone">{COMPANY.phone}</a>], COMPANY.whatsapp && ['WhatsApp', <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}`} key="whatsapp">{COMPANY.whatsapp}</a>], COMPANY.email && ['Email', <a href={`mailto:${COMPANY.email}`} key="email">{COMPANY.email}</a>], COMPANY.indiaAddress && ['India Office', COMPANY.indiaAddress], COMPANY.dubaiAddress && ['Dubai Office', COMPANY.dubaiAddress], COMPANY.businessHours && ['Business Hours', COMPANY.businessHours]].filter(Boolean)

  return <>
    <PageHero title="Let’s Talk About Your Property Requirement" sub="The more context you provide, the easier it is for our team to understand the property conversation most relevant to you." img={IMG.glass} crumb="Contact Us" />
    <section><div className="wrap contact-layout">
      <div className="contact-intro"><span className="eyebrow">Start With What You Need</span><h2>Share the requirement. We’ll help clarify the next step.</h2><p>Whether you are exploring a residential purchase, searching for commercial property, planning to sell, or looking at rent or lease options, begin here.</p><div className="contact-pending"><h3>Direct contact details</h3>{direct.length ? <dl>{direct.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl> : <p>Official phone, WhatsApp, email, office address and business hours will be published here once confirmed.</p>}<p><b>Markets served</b><br />Mumbai · Pune · Dubai</p></div></div>
      {status === 'success' ? <div className="success" role="status"><span>✓</span><h2>Thank you for contacting Nobelcrest.</h2><p>Your enquiry has been received. A member of our team will review the details and get in touch using the information you shared.</p></div> : <form className="contact-form" onSubmit={onSubmit}>
        {context && <p className="form-context">Enquiry context: <b>{context}</b></p>}
        <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
        <div className="form-grid"><label>Full Name *<input required name="name" autoComplete="name" /></label><label>Phone Number *<input required type="tel" name="phone" autoComplete="tel" /></label></div>
        <label>Email Address<input type="email" name="email" autoComplete="email" /></label>
        <div className="form-grid"><label>Preferred Market *<select required name="market" defaultValue=""><option value="" disabled>Select market</option><option>Mumbai</option><option>Pune</option><option>Dubai</option><option>Other</option></select></label><label>Property Type<select name="propertyType" defaultValue={['residential', 'commercial'].includes(context) ? context : ''}><option value="">Not sure</option><option value="residential">Residential</option><option value="commercial">Commercial</option></select></label></div>
        <div className="form-grid"><label>Requirement *<select required name="requirement" defaultValue={['sale', 'rent', 'lease'].includes(context) ? context : ''}><option value="" disabled>Select requirement</option><option value="buy">Buy</option><option value="sell">Sell</option><option value="rent">Rent</option><option value="lease">Lease</option><option value="consultation">General Consultation</option></select></label><label>Budget Range<input name="budget" placeholder="Optional" /></label></div>
        <label>Message / Requirement Details *<textarea required rows="5" name="message" /></label>
        <label className="consent"><input required type="checkbox" name="consent" value="yes" /> I agree to be contacted regarding this enquiry.</label>
        {status === 'unavailable' && <p className="form-message warning" role="alert">Online enquiry delivery is awaiting the confirmed company endpoint. Your information has not been sent.</p>}
        {status === 'error' && <p className="form-message error" role="alert">The enquiry could not be sent. Please try again later or use the confirmed direct contact details.</p>}
        <button className="btn" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit Enquiry'}</button>
      </form>}
    </div></section>
  </>
}
