import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ReactCats from "./components/ReactCats/ReactCats";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<ReactCats />} />
      </Routes>
    </div>
  );
}

export default App;
