import localFont from 'next/font/local'
import { Saira, Lato } from 'next/font/google'

export const neoSansBold = localFont({
  src: '../../fonts/neo_sans_bold.otf',
})

export const neoSans = localFont({
  src: '../../fonts/neo_sans_regular.otf',
})

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const saira = Saira({
  subsets: ['latin'],
  weight: '400',
})
