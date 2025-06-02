import "./index.css";
import MenuNav from "./components/header/Menu";
import HeaderContent from "./components/header/HeaderContent";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container ">
          <MenuNav />
          <HeaderContent />
        </div>
      </header>
      <main>
        <Main/>
      </main>
    </div>
  );
}

export default App;
