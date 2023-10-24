export default function ActionItemNotif({
  children,
  notif,
  desc,
}: {
  children: React.ReactNode
  notif: string
  desc?: string
}) {
  return (
    <button type="button" className="btn btn-link text-reset position-relative">
      {children}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger">
        {notif}
        <span className="visually-hidden">{desc ? desc : ''}</span>
      </span>
    </button>
  )
}
