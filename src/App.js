import "./index.css";
import MenuNav from "./components/header/Menu";
import HeaderContent from "./components/header/HeaderContent";
import Main from "./components/main/Main";
import Content from "./components/ECommerce/Content";
import Testimonial from "./components/ECommerce/Testimonial";
import CTA from "./components/ECommerce/CTA";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <header>
        <MenuNav />
        <HeaderContent />
      </header>
      <main>
        <div className="container ">
          <Main />
        </div>
        <Content />
        <Testimonial />
        <CTA />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
