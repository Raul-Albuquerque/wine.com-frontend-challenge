import localFont from 'next/font/local'
import {Saira, Lato} from 'next/font/google'

export const neoSans = localFont({
  src: [
    {
      path: '../../public/fonts/neo-sans-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/neo-sans-bold.otf',
      weight: '400',
      style: 'normal',
    }
  ]
})

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})

export const saira = Saira({
  subsets: ['latin'],
  weight: '400',
})