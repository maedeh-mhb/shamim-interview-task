import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import theme from "./theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

          <Navigation/>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
