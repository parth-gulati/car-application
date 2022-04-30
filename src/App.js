import "./App.css";
import Header from "./components/Header";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#181510",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
