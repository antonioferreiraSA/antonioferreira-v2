import "./App.css";

import BlogList from "./components/Blog/BlogList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header age={19} title="Antonio Ferreira" content="Header" />

      <BlogList />

      <Footer content="This is the footer" />
    </>
  );
}

export default App;
