import {useRecoilState} from "recoil";
import styled from "styled-components";
import {ThemeButton} from "../Styled/Button";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";
import themeAtom from "../../recoil/theme/atom";
import {THEMES} from "../../constants";

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ThemeToggler = () => {
  const [theme, setTheme] = useRecoilState(themeAtom)

  const handleClick = () => {
    setTheme(thm => thm === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
  }

  return (
    <ThemeButton
      onClick={handleClick}
      aria-label='theme-toggler'
      className={`theme-${theme === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT}`}
    >
      {theme === THEMES.DARK ?
        (<StyledSpan >
          <BsFillSunFill size='1.5rem' color='#ffd43b' />
        </StyledSpan>)
        :
        (<StyledSpan>
          <BsFillMoonFill size='1.5rem' color='#74C0FC' />
        </StyledSpan>)
      }
    </ThemeButton>
  )
}

export default ThemeToggler