import {atom} from 'recoil'

export const NUMBER = 'NUMBER'
export const OPERATOR = 'OPERATOR'
export const FUNCTION = 'FUNCTION'

export const defaultValue = {
  formula: '',
  result: '0',
  lastSectionClicked: NUMBER
}

export const calculator = atom({
  key: 'calculator',
  default: defaultValue
})