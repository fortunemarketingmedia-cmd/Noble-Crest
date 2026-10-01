import { useEffect, useState } from 'react'
import { COMPANY } from '../data/config'

const STORAGE_KEY = 'nobelcrest-cookie-consent'

function loadAnalytics() {
  if (COMPANY.ga4Id && !document.querySelector('[data-nobelcrest-ga4]')) {
    const external = document.createElement('script')
    external.async = true
    external.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(COMPANY.ga4Id)}`
    external.dataset.nobelcrestGa4 = 'true'
    document.head.appendChild(external)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(){ window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', COMPANY.ga4Id, { anonymize_ip: true })
  }
  if (COMPANY.metaPixelId && !document.querySelector('[data-nobelcrest-meta]')) {
    const script = document.createElement('script')
    script.dataset.nobelcrestMeta = 'true'
    script.textContent = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${COMPANY.metaPixelId.replace(/[^0-9]/g, '')}');fbq('track','PageView');`
    document.head.appendChild(script)
  }
}

export default function ConsentManager() {
  const trackingConfigured = Boolean(COMPANY.ga4Id || COMPANY.metaPixelId)
  const [choice, setChoice] = useState(() => localStorage.getItem(STORAGE_KEY))
  useEffect(() => {
    if (COMPANY.searchConsoleVerification && !document.querySelector('meta[name="google-site-verification"]')) {
      const meta = document.createElement('meta')
      meta.name = 'google-site-verification'
      meta.content = COMPANY.searchConsoleVerification
      document.head.appendChild(meta)
    }
    if (choice === 'accepted') loadAnalytics()
  }, [choice])
  if (!trackingConfigured || choice) return null
  const choose = (value) => { localStorage.setItem(STORAGE_KEY, value); setChoice(value) }
  return <div className="consent-banner" role="dialog" aria-label="Cookie preferences"><div><h3>Your privacy choices</h3><p>With your permission, Nobelcrest can use analytics to understand website use and improve the experience. You can continue without non-essential tracking.</p></div><div className="actions"><button className="btn line" onClick={() => choose('rejected')}>Reject Optional</button><button className="btn" onClick={() => choose('accepted')}>Accept Analytics</button></div></div>
}
