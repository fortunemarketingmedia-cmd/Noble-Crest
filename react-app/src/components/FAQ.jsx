export default function FAQ({ items }) {
  return <div className="faq">{items.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
}
