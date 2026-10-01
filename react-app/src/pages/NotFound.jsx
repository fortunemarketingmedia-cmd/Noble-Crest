import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

export default function NotFound() {
  useTitle('Page Not Found | Nobelcrest Properties', 'The requested page could not be found.', [], { noindex: true })
  return <div className="not-found"><div><span className="crest-symbol">404</span><p className="eyebrow">Page not found</p><h1>This address does not lead to an available page.</h1><p>Return home or explore verified property opportunities.</p><div className="actions"><Link className="btn" to="/">Return Home</Link><Link className="btn line" to="/projects">Explore Projects</Link></div></div></div>
}
