import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp'
import Signinform from './components/Signinform/Signinform';
import Navsidebar from './components/Navsidebar/Navsidebar'
// import Navheader from './components/Navheader/Navheader';
import Home from './components/Dummy/Home'
import Linkpage from './components/Dummy/Link'
import Resetpass from './components/resetPass/Resetpass'

function App() {
  return (
    <>
      {/* <Resetpass/> */}
      {/* <Signinform/> */}
      {/* <Navheader />  
      <Navsidebar /> */}
      <Routes>
        <Route exact path='/' element={[<Navsidebar />]}>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/link' element={<Linkpage />} />
        </Route>
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/signin' element={<Signinform />} />
      </Routes>
    </>
  );
}

export default App;
