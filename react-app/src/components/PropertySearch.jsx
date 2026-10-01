import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PropertySearch() {
  const navigate = useNavigate()
  const [region, setRegion] = useState('')
  const [jurisdiction, setJurisdiction] = useState('')
  const [city, setCity] = useState('')
  const [type, setType] = useState('')
  const [requirement, setRequirement] = useState('')
  function submit(event) {
    event.preventDefault()
    const query = new URLSearchParams()
    if (region) query.set('region', region)
    if (jurisdiction) query.set('jurisdiction', jurisdiction)
    if (city) query.set('city', city)
    if (type) query.set('propertyType', type)
    if (requirement) query.set('requirement', requirement)
    navigate(`/projects${query.size ? `?${query}` : ''}`)
  }
  return <form className="property-search" onSubmit={submit}>
    <div className="search-intro"><span>Find your direction</span><strong>Start with the requirement</strong></div>
    <label><span>Region</span><select value={region} onChange={(event) => { setRegion(event.target.value); setJurisdiction(''); setCity('') }}><option value="">All regions</option><option value="India">India</option><option value="Middle East">Middle East</option></select></label>
    <label><span>State / Emirate</span><select value={jurisdiction} onChange={(event) => { setJurisdiction(event.target.value); setCity('') }}><option value="">All</option>{(!region || region === 'India') && <option value="Maharashtra">Maharashtra</option>}{(!region || region === 'Middle East') && <option value="Dubai">Dubai</option>}</select></label>
    <label><span>City</span><select value={city} onChange={(event) => setCity(event.target.value)}><option value="">All cities</option>{(!region || region === 'India') && <><option value="Mumbai">Mumbai</option><option value="Pune">Pune</option></>}{(!region || region === 'Middle East') && <option value="Dubai">Dubai</option>}</select></label>
    <label><span>Property</span><select value={type} onChange={(event) => setType(event.target.value)}><option value="">Any type</option><option value="residential">Residential</option><option value="commercial">Commercial</option></select></label>
    <label><span>Requirement</span><select value={requirement} onChange={(event) => setRequirement(event.target.value)}><option value="">Buy, rent or lease</option><option value="sale">Sale</option><option value="rent">Rent</option><option value="lease">Lease</option></select></label>
    <button className="search-submit" type="submit" aria-label="Explore matching property category"><span>Explore</span><b>↗</b></button>
  </form>
}
