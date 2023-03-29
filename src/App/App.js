import HomePage from "../Pages";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exat path="/" element={<HomePage/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
