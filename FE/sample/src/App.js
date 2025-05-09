import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Parent from "./page/Parent";
import Child from "./page/Child";
import DropDown from "./page/DropDown";
import Insert from "./page/Insert"
import Practise from "./page/Practise";
import Ptoc from "./page/Ptoc";
import Par from "./page/Par";
import Practise1 from "./page/Practise1";
import Drop from "./page/Drop";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/parent" element={<Parent />}></Route>
          <Route path="/childtoparent" element={<Child />}></Route>
          <Route path="/select" element={<DropDown/>}></Route>
          <Route path="/insert" element={<Insert/>}></Route>
          <Route path="/practise" element={<Practise/>}/>
          <Route path="/Ptoc" element ={<Ptoc/>}/>
          <Route path="/p" element={<Par/>}/>
          <Route path="/practise1" element={<Practise1/>}/>
          <Route path="/drop" element={<Drop/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
