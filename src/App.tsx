import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./Pages/Transactions";
import { TransactionsProvider } from "./contexts/transactionsContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
