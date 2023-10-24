import {
  Navbar,
  Container,
  NavbarToggle,
  NavbarCollapse,
} from '../../bootstrap'
import Actions from './Actions'
import Brand from './Brand'
import Menu from './Menu'

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-white navbar-light p-0">
      <Container>
        <Brand />
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Menu />
          <Actions />
        </NavbarCollapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
