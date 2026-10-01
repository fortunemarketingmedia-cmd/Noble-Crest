import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { submitEnquiry } from '../data/config'

const ModalCtx = createContext(() => {})
function useEnquire() { return useContext(ModalCtx) }

export function EnquireProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('idle')
  const openedAt = useRef(0)
  const close = useCallback(() => setOpen(false), [])
  const openModal = useCallback(() => { setStatus('idle'); openedAt.current = Date.now(); setOpen(true) }, [])
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => { if (event.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, close])

  async function onSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data.website || Date.now() - openedAt.current < 2500) return
    setStatus('sending')
    try {
      const result = await submitEnquiry({ ...data, source: window.location.href })
      setStatus(result.configured ? 'success' : 'unavailable')
      if (result.configured) form.reset()
    } catch { setStatus('error') }
  }

  return <ModalCtx.Provider value={openModal}>{children}<div className={`modal${open ? ' open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="enquiry-title" onClick={(event) => { if (event.target === event.currentTarget) close() }}><div className="box"><button className="x" onClick={close} aria-label="Close enquiry form">×</button>{status === 'success' ? <div role="status"><h3 id="enquiry-title">Thank you.</h3><p>Your enquiry has been received. A member of our team will review the details and get in touch.</p></div> : <><h3 id="enquiry-title">Discuss Your Requirement</h3><p>Share a few details so our team can understand the right next conversation.</p><form onSubmit={onSubmit}><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label><label>Full name<input required name="name" autoComplete="name" /></label><label>Phone number<input type="tel" required name="phone" autoComplete="tel" /></label><label>Email<input type="email" name="email" autoComplete="email" /></label><label>Requirement<select name="requirement"><option>Buy</option><option>Sell</option><option>Rent</option><option>Lease</option><option>General Consultation</option></select></label><label className="consent"><input required type="checkbox" name="consent" value="yes" /> I agree to be contacted about this enquiry.</label>{status === 'unavailable' && <p className="form-message warning" role="alert">Online delivery is awaiting the confirmed company endpoint. Your information has not been sent.</p>}{status === 'error' && <p className="form-message error" role="alert">The enquiry could not be sent. Please try again later.</p>}<button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Enquiry'}</button></form></>}</div></div></ModalCtx.Provider>
}

export function EnquireLink({ className, children = 'Speak With Our Team', ...rest }) {
  const open = useEnquire()
  return <a href="#enquire" className={className} onClick={(event) => { event.preventDefault(); open() }} {...rest}>{children}</a>
}

export function EnquireFloatButton() {
  const open = useEnquire()
  return <button className="float" onClick={open}>Enquire Now</button>
}
