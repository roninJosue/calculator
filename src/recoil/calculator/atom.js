import {atom} from 'recoil'
import {NUMBER} from "../../utils/constants";

export const defaultValue = {
  formula: '',
  result: '0',
  lastSectionClicked: NUMBER,
  evaluated: false
}

export const calculator = atom({
  key: 'calculator',
  default: defaultValue
})