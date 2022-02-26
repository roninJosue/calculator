import {atom} from 'recoil'

export const formula = atom({
  key: 'formula',
  default: '4+5='
})

export const result = atom({
  key: 'result',
  default: 9
})