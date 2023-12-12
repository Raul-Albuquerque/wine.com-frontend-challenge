import { lato } from '@/assets/fonts'
import { TagContainer } from './styles'

type Props = {
  children: string
}

export function Tag({ children }: Props) {
  return <TagContainer className={lato.className}>{children}</TagContainer>
}
