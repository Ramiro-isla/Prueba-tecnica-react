import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ReactCats from "./components/ReactCats/ReactCats";
import FizzBuzz from "./components/FizzBuzz/FizzBuzz";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ReactCats />} />
        <Route  path="/fizzbuzz" element={<FizzBuzz />} />
      </Routes>
    </div>
  );
}

export default App;
