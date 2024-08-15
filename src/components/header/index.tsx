import coverImg from '../../assets/cover.jpg'
import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coverImg} alt="" className="cover" />
      <img src={logoImg} alt="" className="logo" />
    </HeaderContainer>
  )
}
