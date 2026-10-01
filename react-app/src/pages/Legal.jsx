import PageHero from '../components/PageHero'
import { IMG } from '../data/images'
import useTitle from '../hooks/useTitle'

const PAGES = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'How information submitted through the Nobelcrest website is intended to be handled.',
    sections: [
      ['Information we collect', 'When you submit an enquiry, the website may collect your name, phone number, email address, preferred market, property type, budget and the details you choose to share. Basic technical information may also be processed for security and website performance.'],
      ['How information is used', 'Enquiry information is used to understand and respond to your property requirement, coordinate relevant conversations, maintain service records and protect the website from misuse.'],
      ['Sharing and retention', 'Information should be shared only with service providers or professional advisers needed to operate the website or respond to an enquiry, and where required by law. Retention periods must be confirmed against Nobelcrest’s actual operating and legal requirements.'],
      ['Your choices', 'You may ask Nobelcrest to correct or delete information, or to stop contacting you, subject to applicable legal and record-keeping requirements. Official privacy contact details must be inserted before launch.'],
      ['Cookies and analytics', 'The production cookie and analytics statement must be updated after the final analytics and consent tools are selected. Non-essential tracking should not run until the required consent has been obtained.'],
    ],
  },
  terms: {
    title: 'Terms of Use',
    intro: 'General conditions for using the Nobelcrest Properties website.',
    sections: [
      ['Website purpose', 'This website provides general information about Nobelcrest Properties LLP and enables visitors to submit property requirements. Website content does not constitute a binding offer, legal advice, tax advice or financial advice.'],
      ['Property information', 'Project, price, availability, specification, distance, ownership, developer and regulatory information must be independently verified before any decision or transaction. Availability and commercial terms may change.'],
      ['Permitted use', 'Visitors must not misuse the website, attempt unauthorised access, interfere with its operation or submit unlawful, misleading or harmful content.'],
      ['Intellectual property', 'Website text, design and brand material may not be reproduced without permission, except where applicable law permits. Rights and ownership wording should be reviewed against the final supplied assets.'],
      ['Final review required', 'These terms are an implementation draft and must be reviewed for Nobelcrest’s actual business, services and applicable jurisdictions before production launch.'],
    ],
  },
  disclaimer: {
    title: 'Website Disclaimer',
    intro: 'Important information about property content and decisions.',
    sections: [
      ['General information only', 'Content on this website is intended for general information and initial property discussions. It should not be treated as legal, tax, investment or financial advice.'],
      ['No guarantee or assurance', 'Nobelcrest does not publish guaranteed returns, risk-free claims, assured appreciation or guaranteed rental yields. Past market conditions do not guarantee future results.'],
      ['Verification', 'Visitors should verify project approvals, registration information, ownership, pricing, dimensions, amenities, distances, availability, payment terms and all transaction documents before making a commitment.'],
      ['Third-party information', 'Where information is supplied by a developer, owner or other third party, it should be checked and rewritten from verified source material before publication.'],
      ['Professional advice', 'Visitors should obtain advice from appropriately qualified legal, tax, financial or regulatory professionals where their decision requires it.'],
    ],
  },
}

export default function Legal({ type }) {
  const page = PAGES[type]
  useTitle(`${page.title} | Nobelcrest Properties`, `${page.title} for the Nobelcrest Properties website.`, [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` }, { '@type': 'ListItem', position: 2, name: page.title, item: window.location.href }] }], { noindex: true })
  return <><PageHero title={page.title} sub={page.intro} img={IMG.lobby} crumb={page.title} /><section><div className="wrap legal-page"><div className="legal-notice"><b>Pre-launch legal review</b><p>This implementation draft must be reviewed and approved for the company’s actual operations and jurisdictions before the website goes live.</p></div>{page.sections.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></section></>
}
