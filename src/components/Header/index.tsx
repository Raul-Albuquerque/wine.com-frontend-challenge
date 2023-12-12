import Link from 'next/link'
import * as S from './styles'
import { lato, neoSans } from '@/assets/fonts'

export default function Header() {
  return (
    <S.Header>
      <S.HeaderContainer className="container">
        <S.NavContainer>
          <Link href={'/'}>
            <h1>
              <img src="/images/logo.png" alt="logo wine" />
            </h1>
          </Link>
          <nav>
            <ul className={neoSans.className}>
              <S.PageNav href={'/'}>Clube</S.PageNav>
              <S.PageNav href={'/'}>Loja</S.PageNav>
              <S.PageNav href={'/'}>Produtores</S.PageNav>
              <S.PageNav href={'/'}>Ofertas</S.PageNav>
              <S.PageNav href={'/'}>Eventos</S.PageNav>
            </ul>
          </nav>
        </S.NavContainer>
        <div>
          <ul>
            <S.CartItem href={'/'}>
              <img src="/images/search.png" alt="procurar" />
            </S.CartItem>
            <S.CartItem href={'/'}>
              <img src="/images/profile.png" alt="minha conta" />
            </S.CartItem>
            <S.CartItem href={'/'}>
              <img src="/images/winebox.png" alt="meu carrinho" />
              <div className={lato.className}>0</div>
            </S.CartItem>
          </ul>
        </div>
      </S.HeaderContainer>
    </S.Header>
  )
}
