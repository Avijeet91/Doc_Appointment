import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Reg from './components/Reg';
import Contactus from './components/Contactus';
import Adminlogin from './components/Adminlogin';
import Adminafterlogin from './components/Adminafterlogin';
import Adminlogout from './components/Adminlogout';
import Userafterlogin from './components/Userafterlogin';
import Userlogout from './components/Userlogout';
import Userlogin from './components/Userlogin';
import Adddoc from './components/Adddoc';
import Deldoc from './components/Deldoc';
import Docbook from './components/Docbook';
import Userhome from './components/Userhome';
import Viewbook from './components/Viewbook';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import PrivacyPolicy from './components/Privacy';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* This ensures content expands properly */}
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/adminlogin' element={<Adminlogin />} />
            <Route path='/userlogin' element={<Userlogin />} />
            <Route path='/userlogout' element={<Userlogout />} />
            <Route path='/deldoc' element={<Deldoc />} />
            <Route path='/userReg' element={<Reg />} />
            <Route path='/userhome' element={<Userhome />} />
            <Route path='/adminafterlogin' element={<Adminafterlogin />} />
            <Route path='/adminlogout' element={<Adminlogout />} />
            <Route path='/userafterlogin' element={<Userafterlogin />} />
            <Route path='/adddoc' element={<Adddoc />} />
            <Route path='/docbook' element={<Docbook />} />
            <Route path='/viewbook' element={<Viewbook />} />
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/privacy' element={<PrivacyPolicy />}/>
          </Routes>
        </div>
        
        {/* Footer always stays at the bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
