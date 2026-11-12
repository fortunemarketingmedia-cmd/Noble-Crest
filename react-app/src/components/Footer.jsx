import { Link } from 'react-router-dom'
import { NAV_ITEMS, PROJECT_LINKS } from '../data/site'
import { COMPANY } from '../data/config'

export default function Footer() {
  return <footer>
    <div className="wrap footer-grid">
      <div className="footer-brand"><Link className="footer-logo" to="/"><img src="/nobelcrest-logo.png" alt="Nobelcrest Properties LLP" /></Link><p>Nobelcrest Properties LLP provides professional real estate guidance for residential and commercial property requirements across India and Dubai.</p><p className="footer-note">Informed advice · Transparent communication · Long-term relationships</p></div>
      <div><h4>Company</h4><ul>{NAV_ITEMS.map((p) => <li key={p.to}><Link to={p.to}>{p.label}</Link></li>)}</ul></div>
      <div><h4>Projects</h4><ul>{PROJECT_LINKS.map((p) => <li key={p.to}><Link to={p.to}>{p.label}</Link></li>)}</ul></div>
      <div><h4>Markets &amp; Contact</h4><ul><li>India: Mumbai &amp; Pune</li><li>UAE: Dubai</li><li>{COMPANY.propertyTypes.join(' · ')}</li><li><b>Contact Numbers:</b><br />{COMPANY.phones.map((phone, index) => <span key={phone}>{index > 0 && <br />}<a href={`tel:${phone}`}>{phone}</a></span>)}</li><li><b>Office Address:</b><br />{COMPANY.indiaAddress}</li><li><b>RERA No.:</b> {COMPANY.reraNumber}</li>{COMPANY.email && <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>}</ul></div>
    </div>
    <div className="wrap footer-bottom"><span>© 2026 Nobelcrest Properties LLP</span><span><Link to="/privacy-policy">Privacy Policy</Link> · <Link to="/terms-of-use">Terms of Use</Link> · <Link to="/website-disclaimer">Website Disclaimer</Link></span></div>
  </footer>
}
