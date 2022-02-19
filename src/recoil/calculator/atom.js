import {atom} from 'recoil'

const calculatorAtom = atom({
  key: 'formula',
  default: ''
})

export default calculatorAtom
