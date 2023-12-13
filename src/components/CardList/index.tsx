import * as S from './styles'
import Card from '../Card'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { lato } from '@/assets/fonts'

export default function CardList() {
  return (
    <>
      <S.Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Container>
      <S.PageContainer className={lato.className}>
        <S.Page className="current">1</S.Page>
        <S.Page className="next">2</S.Page>
        <S.Page>3</S.Page>
        <S.NextPage>
          {/* <S.Pages>...</S.Pages> */}
          <S.Ellipsis>... </S.Ellipsis>
          <p>Próximo</p>
          <img src={'/images/arrow.png'} alt="next-page" />
          <img src={'/images/arrow.png'} alt="next-page" />
        </S.NextPage>
      </S.PageContainer>
    </>
  )
}
