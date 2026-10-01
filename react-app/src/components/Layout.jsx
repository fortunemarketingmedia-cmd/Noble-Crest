import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { EnquireFloatButton } from './EnquireModal'
import ConsentManager from './ConsentManager'
import ScrollProgress from './ScrollProgress'

export default function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.querySelector('main, .pagehero')?.focus?.({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <Header />
      <ScrollProgress />
      <main id="main-content" tabIndex="-1">{children}</main>
      <Footer />
      <EnquireFloatButton />
      <ConsentManager />
    </>
  )
}
