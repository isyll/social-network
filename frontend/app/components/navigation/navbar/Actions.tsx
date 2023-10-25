import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../../bootstrap'
import {
  faBell,
  faCartShopping,
  faEnvelope,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import '../styles.scss'
import ActionItemNotif from '../ActionItemNotif'
import styles from '../navigation.module.scss'
import Image from 'next/image'

export default function Actions() {
  return (
    <div className="m-auto d-flex">
      <Button variant="link text-reset">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="fa-solid fa-magnifying-glass icon"
        />
      </Button>
      <div className="vr mx-2"></div>
      <div className={styles.notifsWrapper}>
        <ActionItemNotif notif="9">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fa-regular fa-envelope icon"
          />
        </ActionItemNotif>
        <ActionItemNotif notif="1">
          <FontAwesomeIcon icon={faBell} className="fa-regular fa-bell icon" />
        </ActionItemNotif>
        <ActionItemNotif notif="4">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="fa-solid fa-cart-shopping icon"
          />
        </ActionItemNotif>
      </div>
      <div className="d-flex align-items-center ms-5">
        <p className="m-0 fw-bold me-1 fs-5">Assane</p>
        <Image src="/user.png" alt="Photo de profil" width={42} height={42} />
      </div>
    </div>
  )
}
