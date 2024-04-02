import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home';

import Shop from './Shop';
import Blog from './Blog';
import Pages from './pages';
import Navbar from './Navbar';

function App() {
  return (<>
    <div className='bg1 p-5'>
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='/Shop' element={<Shop/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
    </Router>

    </div>
    </>
  );
}

export default App;
