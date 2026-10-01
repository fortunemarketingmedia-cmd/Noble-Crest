import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { EnquireLink } from './EnquireModal'
import { IMG } from '../data/images'

export default function Cta({
  title = 'Planning Your Next Property Move?',
  text = 'Tell us what you are looking for and begin with a clearer view of the market.',
  img = IMG.glass,
}) {
  return (
    <div className="cta" style={{ backgroundImage: `url(${img})` }}>
      <Reveal className="wrap">
        <span className="eyebrow">Get in touch</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <EnquireLink className="btn">Discuss Your Requirement</EnquireLink>
        <Link className="btn ghost" to="/contact-us">Contact Nobelcrest</Link>
      </Reveal>
    </div>
  )
}
