import { Btn } from './styles'

type Props = {
  children: string
}

export default function Button({ children }: Props) {
  return <Btn>{children}</Btn>
}
