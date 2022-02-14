import {useRecoilValue} from "recoil";
import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import themeAtom from "./recoil/theme/atom";
import {darkTheme, lightTheme} from "./styles/theme";
import Calculator from "./components/Calculator";
import ThemeToggler from "./components/ThemeToggler";
import {Main} from "./components/Styled/Main";

function App() {
  const theme = useRecoilValue(themeAtom)
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles/>
      <Main>
        <ThemeToggler />
        <Calculator />
      </Main>
    </ThemeProvider>
  );
}

export default App;
