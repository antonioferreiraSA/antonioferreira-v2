import "./App.css";

import Booklist from "./components/books/Booklist";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        age={19}
        title="My Website"
        content="Hello world I am the HEADER"
      />
      <Footer content="This is the footer" />
      <Booklist/>
    </>
  );
}

export default App;
