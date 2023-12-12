import { Tag } from '../Tag'
import * as S from './styles'

export default function Card() {
  return (
    <S.CardContainer>
      <S.InfoContainer>
        <div>
          <img src="/images/product.png" />
          <S.Label src="/images/label.png" />
        </div>
        <S.ProductName>
          Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014
        </S.ProductName>
        <S.DiscountContainer>
          <p>R$ 37,40</p>
          <Tag>60% OFF</Tag>
        </S.DiscountContainer>
      </S.InfoContainer>
      <button>Adicionar</button>
    </S.CardContainer>
  )
}
