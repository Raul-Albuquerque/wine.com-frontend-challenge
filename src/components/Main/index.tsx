import { lato, neoSansBold, saira } from '@/assets/fonts'
import * as S from './styles'
import CardList from '../CardList'
import Button from '../Button'

type Props = {
  layout: 'home' | 'products'
}

export default function Main({ layout }: Props) {
  return (
    <S.ContentContainer className="container">
      {layout === 'home' && (
        <>
          <S.Aside>
            <h2 className={neoSansBold.className}>Refine sua busca</h2>
            <S.Form className={lato.className}>
              <h3>Por preço</h3>
              <S.InputContainer>
                <input type="radio" />
                <label>Até R$40</label>
              </S.InputContainer>
              <S.InputContainer>
                <input type="radio" />
                <label>R$40 A R$60</label>
              </S.InputContainer>
              <S.InputContainer>
                <input type="radio" />
                <label>R$100 A R$200</label>
              </S.InputContainer>
              <S.InputContainer>
                <input type="radio" />
                <label>R$200 A R$500</label>
              </S.InputContainer>
              <S.InputContainer>
                <input type="radio" />
                <label>Acima de R$500</label>
              </S.InputContainer>
            </S.Form>
          </S.Aside>
          <S.Main>
            <h3 className={lato.className}>
              <strong>49</strong> produtos encontrados
            </h3>
            <CardList />
          </S.Main>
        </>
      )}

      {layout === 'products' && (
        <>
          <main>
            <S.ReturnContainer>
              <img src={'/images/chevron.png'} alt="back" />
              <h3>Voltar</h3>
            </S.ReturnContainer>
            <S.Section>
              <S.ProductImage>
                <img src={'/images/apothic.png'} alt="apothic red" />
              </S.ProductImage>
              <article>
                <S.BreadCrump className={lato.className}>
                  <p>Vinhos</p>
                  <img src={'/images/arrow.png'} alt="next page" />
                  <p>Estados Unidos</p>
                  <img src={'/images/arrow.png'} alt="next page" />
                  <p className="current">California</p>
                </S.BreadCrump>
                <S.ProductName className={neoSansBold.className}>
                  Apothic Red 2019
                </S.ProductName>
                <S.ProductInfo className={lato.className}>
                  <S.Flag src={'/images/flag.png'} />
                  <p>Estados Unidos</p>
                  <p>Tinto</p>
                  <p>Meio Seco/Demi-Sec</p>
                  <p>750ml</p>
                  <S.StarContainer>
                    <img src={'/images/star.png'} alt="star" />
                    <img src={'/images/star.png'} alt="star" />
                    <img src={'/images/star.png'} alt="star" />
                    <img src={'/images/star.png'} alt="star" />
                    <img src={'/images/star_empty.png'} alt="empty star" />
                  </S.StarContainer>
                  <p>&#40;2&#41;</p>
                </S.ProductInfo>
                <S.ProductPrice className={lato.className}>
                  <h4>
                    R$ <S.Real>63</S.Real>
                    <S.Centavos>,67</S.Centavos>
                  </h4>
                  <p>Não sócio R$120,95/Un.</p>
                </S.ProductPrice>
                <S.ProductReview>
                  <h5>Comentário do Sommelier</h5>
                  <p className={saira.className}>
                    Produzido no terroir californiano, esse tinto mescla as
                    variedades Zinfandel, Syrah, Cabernet Sauvignon e Merlot.
                    Apothic é um vinho inspirado nas antigas Apothecas (adegas
                    subterrâneas), um lugar misterioso onde há mais de 800 anos
                    os viticultores misturavam e armazenavam seus cobiçados
                    vinhos.
                  </p>
                </S.ProductReview>
                <S.CartShortcut className={lato.className}>
                  <S.Less>-</S.Less>
                  <p>1</p>
                  <S.More>+</S.More>
                  <span></span>
                  <Button layout="cart">Adicionar</Button>
                </S.CartShortcut>
              </article>
            </S.Section>
          </main>
        </>
      )}
    </S.ContentContainer>
  )
}
