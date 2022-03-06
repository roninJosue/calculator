import {atom} from 'recoil'

export const defaultValue = {
  formula: '',
  result: '0'
}

export const calculator = atom({
  key: 'calculator',
  default: defaultValue
})