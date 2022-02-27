import {atom} from 'recoil'

export const calculator = atom({
  key: 'calculator',
  default: {
    formula: '',
    result: '0'
  }
})