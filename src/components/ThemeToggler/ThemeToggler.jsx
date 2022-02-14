import {useRecoilState} from "recoil";
import {ThemeButton} from "../Styled/Button";
import themeAtom from "../../recoil/theme/atom";
import {THEMES} from "../../constants";

const ThemeToggler = () => {
  const [theme, setTheme] = useRecoilState(themeAtom)

  const handleClick = () => {
    setTheme(thm => thm === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  }

  return (
    <ThemeButton onClick={handleClick}>
      {theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK}
    </ThemeButton>
  )
}

export default ThemeToggler