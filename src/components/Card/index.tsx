import { lato } from '@/assets/fonts'
import { Tag } from '../Tag'
import * as S from './styles'
import Button from '../Button'

export default function Card() {
  return (
    <S.CardContainer>
      <S.InfoContainer className={lato.className}>
        <div>
          <img src="/images/product.png" alt="imagem vinho" />
          <S.Label src="/images/label.png" />
        </div>
        <S.ProductName>
          Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014
        </S.ProductName>
        <S.DiscountContainer>
          <p>R$ 37,40</p>
          <Tag>60% OFF</Tag>
        </S.DiscountContainer>
        <S.MemberPrice>
          Sócio Wine
          <span>
            <small>R$</small>30<small>,00</small>
          </span>
        </S.MemberPrice>
        <S.NormalPrice>
          Não sócio <span>R$ 37,40</span>
        </S.NormalPrice>
      </S.InfoContainer>
      <Button>Adicionar</Button>
    </S.CardContainer>
  )
}
