import HomePage from "../Pages/Home";
import Customer from "../Pages/Customer";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route exat path="/" element={<HomePage/>}></Route>
        <Route path="/customer" element={<Customer/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
