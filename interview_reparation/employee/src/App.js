import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layout/Home';
import Select from './component/Select';

import AxiosDropdown from './layout/AxiosDropdown';
import Usecontexthook from './layout/Usecontexthook';
import ProbsDrilling from './layout/ProbsDrilling';
import Practise from './component/Practise';
import Ref1 from './layout/Ref1';
import Count1 from './layout/Count1';
import Ref2 from './layout/Ref2';
import Ref3 from './layout/Ref3';
import Staticref from './layout/Staticref';
import MultipleDropDown from './layout/MultipleDropDown';
import Post from './layout/Post';
import Parenttochild from './layout/Parenttochild';
import ChildComponent from './layout/ChildComponent';
//import Timestamp from './layout/Timestamp';
import Loan from './layout/Loan'
function App() {
  return (
    <div className="App">
      <Router>
   <Routes>
      {/* <Route path ="/home" element = {<Home/>}/>  */}
          <Route path="/Loan" element={<Loan />} />
      <Route path="/home" element={<Home />} />

      <Route path="/select" element={<Select />}/>
      <Route path="/axios"  element={<AxiosDropdown />}/>
//       <Route path="/time" element={<Timestamp />} />
      {/* <Route path="/insert"  element={<InsertData />}/> */}
      <Route path="/usecontext"  element={<Usecontexthook />}/>
      <Route path="/probsdrilling" element={<ProbsDrilling/>}/>
      <Route path="/practise" element ={<Practise/>}/>
      <Route path="/ref1" element ={<Ref1/>}/>
      <Route path="/ref2" element ={<Ref2/>}/>
      <Route path="/ref3" element ={<Ref3/>}/>
      <Route path="/select-static-ref" element ={<Staticref/>}/>
      <Route path="/count1" element ={<Count1/>}/>
      <Route path= "/muliple" element ={<MultipleDropDown/>}/>
      <Route path ="/parenttochild" element ={<Parenttochild/>}/>

      <Route path ="/childComponent" element ={<ChildComponent/>}/>

      <Route path= "/post" element ={<Post/>}/>
      {/* <Route> </Route>
      <Route> </Route> */}
      </Routes>
    </Router>

    </div>
  );
}

export default App;
