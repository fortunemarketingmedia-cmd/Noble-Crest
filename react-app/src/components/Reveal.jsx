import useReveal from '../hooks/useReveal'

/**
 * Wraps children with the .rv reveal-on-scroll treatment used throughout
 * the original static site (fades/slides up into view once).
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`rv ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
