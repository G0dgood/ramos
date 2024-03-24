import Landing from "./pages/Landing";
import AOS from "aos";

function App() {

  AOS.init({
    // once: true,
    duration: 1000,
    easing: "ease",
  });

  return (
    <div className="App">
      <Landing />

    </div>
  );
}

export default App;
