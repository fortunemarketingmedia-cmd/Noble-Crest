import { Link } from 'react-router-dom'

export default function PageHero({ title, sub, img, crumb }) {
  return (
    <div className="pagehero" style={{ backgroundImage: `url(${img})` }}>
      <div className="wrap">
        <div className="crumb"><Link to="/">Home</Link> / {crumb}</div>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </div>
  )
}
