import Image from 'next/image'
import { NavbarBrand } from '../../bootstrap'
import style from '../navigation.module.scss'

export default function Brand() {
  return (
    <NavbarBrand href="#home" className="m-auto d-flex align-items-center py-2">
      <Image src="/cool.png" alt="Isyll logo" width={32} height={32} priority />
      <div className="vr mx-4"></div>
      <div className={style.titleLogo}>
        Sénégal <br />
        En ligne
      </div>
    </NavbarBrand>
  )
}
