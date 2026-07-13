export function ArrowLink({ children, href }) {
  return (
    <a className="arrow-link" href={href}>
      <span>{children}</span>
      <span aria-hidden="true">↘</span>
    </a>
  )
}
