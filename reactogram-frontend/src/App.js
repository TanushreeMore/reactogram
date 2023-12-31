import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import PostOverview from './pages/PostOverview';
import Profile from './pages/Profile';
import Logout from './pages/Logout';


function App() {
  return (
    <div className='app-bg'>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/posts' element={<PostOverview />}></Route>
          <Route exact path='/myprofile' element={<Profile />}></Route>
          <Route exact path='/logout' element={<Logout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
