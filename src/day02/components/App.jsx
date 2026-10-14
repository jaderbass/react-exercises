import Header from "./Header.jsx";
import ProductList from "./ProductList.jsx";
import InfoBox from "./InfoBox.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main>
        <InfoBox title="Versandhinweis">
          <p>
            Ab 50 € liefern wir
            versandkostenfrei.
          </p>
        </InfoBox>

        <ProductList />
      </main>

      <Footer />
    </>
  );
}

export default App;
