import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, NavLink } from '../../bootstrap'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import '../menu.scss'

export default function Actions() {
  return (
    <Nav
      defaultActiveKey="/"
      activeKey={'/'}
      className="m-auto d-flex menu-wrapper"
    >
      <NavLink className="d-flex">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="fa-solid fa-magnifying-glass icon"
        />
        <div className="vr mx-3"></div>
      </NavLink>
    </Nav>
  )
}
