import InvoiceList from "./components/InvoiceList";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/UI/Header";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <InvoiceList />
      </main>
    </>
  );
}

export default App;
