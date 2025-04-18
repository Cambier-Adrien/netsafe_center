import { Header, Main, Footer, Modals } from "./Page";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ThemeProvider,
  ModalProvider,
  QuestionProvider,
  ConnectionProvider,
} from "./Contexts";
import { ScrollToTop } from "./Functions";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ConnectionProvider>
          <ThemeProvider>
            <ModalProvider>
              <QuestionProvider>
                <Header />
                <Main />
                <Footer />
                <Modals />
              </QuestionProvider>
            </ModalProvider>
          </ThemeProvider>
        </ConnectionProvider>
      </Router>
    </>
  );
}

export default App;
