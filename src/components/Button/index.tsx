import { lato } from '@/assets/fonts'
import { Btn, CartBtn } from './styles'

type Props = {
  children: string
  layout: 'button' | 'cart'
}

export default function Button({ children, layout }: Props) {
  return (
    <>
      {layout === 'button' && <Btn>{children}</Btn>}
      {layout === 'cart' && (
        <CartBtn className={lato.className}>{children}</CartBtn>
      )}
    </>
  )
}
