import "./App.css";
import Info from "./profile/info";
import Person from "./profile/person/person";
import Footer from "./footer/footer";
function App() {
  return (
    <>
      <div className="App">
        <Info />
        <Person />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
