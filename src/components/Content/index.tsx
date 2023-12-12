import { lato, neoSansBold } from '@/assets/fonts'
import * as S from './styles'

export default function Main() {
  return (
    <S.ContentContainer className='container'>
      <S.Aside>
        <h2 className={neoSansBold.className}>Refine sua busca</h2>
        <S.Form className={lato.className}>
          <h4>Por preço</h4>
          <S.InputContainer>
            <input type='radio' />
            <label>Até R$40</label>
          </S.InputContainer>
          <S.InputContainer>
            <input type='radio' />
            <label>R$40 A R$60</label>
          </S.InputContainer>
          <S.InputContainer>
            <input type='radio' />
            <label>R$100 A R$200</label>
          </S.InputContainer>
          <S.InputContainer>
            <input type='radio' />
            <label>R$200 A R$500</label>
          </S.InputContainer>
          <S.InputContainer>
            <input type='radio' />
            <label>Acima de R$500</label>
          </S.InputContainer>
        </S.Form>
      </S.Aside>
      <S.Main>
        <h4 className={lato.className}><strong>49</strong> produtos encontrados</h4>
      </S.Main>
    </S.ContentContainer>
  )
}
