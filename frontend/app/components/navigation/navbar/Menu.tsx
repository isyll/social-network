import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, NavLink } from '../../bootstrap'
import {
  faChartLine,
  faCircleUser,
  faCommentDots,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import '../styles.scss'

export default function Menu() {
  return (
    <Nav
      defaultActiveKey="/"
      activeKey={'/'}
      className="m-auto d-flex menu-wrapper"
    >
      <NavLink href="/">
        <FontAwesomeIcon
          icon={faChartLine}
          className="fa-solid fa-chart-line icon"
        />
      </NavLink>
      <NavLink href="/profile">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="fa-solid fa-circle-user icon"
        />
      </NavLink>
      <NavLink href="/friends">
        <FontAwesomeIcon icon={faUsers} className="fa-solid fa-users icon" />
      </NavLink>
      <NavLink href="/messages">
        <FontAwesomeIcon
          icon={faCommentDots}
          className="fa-regular fa-comment-dots icon"
        />
      </NavLink>
    </Nav>
  )
}
