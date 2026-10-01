import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PropertySearch() {
  const navigate = useNavigate()
  const [market, setMarket] = useState('')
  const [type, setType] = useState('')
  const [requirement, setRequirement] = useState('')
  function submit(event) {
    event.preventDefault()
    const category = type || requirement
    const query = new URLSearchParams()
    if (market) query.set('market', market)
    navigate(category ? `/projects/${category}?${query}` : `/projects?${query}`)
  }
  return <form className="property-search" onSubmit={submit}>
    <div className="search-intro"><span>Find your direction</span><strong>Start with the requirement</strong></div>
    <label><span>Market</span><select value={market} onChange={(event) => setMarket(event.target.value)}><option value="">All markets</option><option value="Mumbai">Mumbai</option><option value="Pune">Pune</option><option value="Dubai">Dubai</option></select></label>
    <label><span>Property</span><select value={type} onChange={(event) => setType(event.target.value)}><option value="">Any type</option><option value="residential">Residential</option><option value="commercial">Commercial</option></select></label>
    <label><span>Requirement</span><select value={requirement} onChange={(event) => setRequirement(event.target.value)}><option value="">Buy, rent or lease</option><option value="sale">Sale</option><option value="rent">Rent</option><option value="lease">Lease</option></select></label>
    <button className="search-submit" type="submit" aria-label="Explore matching property category"><span>Explore</span><b>↗</b></button>
  </form>
}
