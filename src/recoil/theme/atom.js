import {atom} from "recoil"

const themeAtom = atom({
  key: 'theme',
  default: 'dark'
})

export default themeAtom