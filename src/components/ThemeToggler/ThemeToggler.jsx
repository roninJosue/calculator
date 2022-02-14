import {useRecoilState} from "recoil";
import {ThemeButton} from "../Styled/Button";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";
import themeAtom from "../../recoil/theme/atom";
import {THEMES} from "../../constants";

const ThemeToggler = () => {
  const [theme, setTheme] = useRecoilState(themeAtom)

  const handleClick = () => {
    setTheme(thm => thm === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  }

  return (
    <ThemeButton onClick={handleClick}>
      {theme === THEMES.DARK ?
        <span><BsFillSunFill size='1.5rem' /></span> :
        <span><BsFillMoonFill size='1.5rem' /></span>
      }
    </ThemeButton>
  )
}

export default ThemeToggler