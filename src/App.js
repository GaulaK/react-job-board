import "./App.css";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="The Job Board" />
      <div className="container">
        <Jobs />
      </div>
      <Footer location="Le Reacteur" name="Gauthier Portefaix" />
    </>
  );
}

export default App;
