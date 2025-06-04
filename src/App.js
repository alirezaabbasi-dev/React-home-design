import "./index.css";
import MenuNav from "./components/header/Menu";
import HeaderContent from "./components/header/HeaderContent";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <header>
          <MenuNav />
          <HeaderContent />
      </header>
      <main>
        <div className="container ">
        <Main/>
        </div>
      </main>
    </div>
  );
}

export default App;
