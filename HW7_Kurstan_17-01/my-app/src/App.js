import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/menu/Menu';
import AboutPage from './pages/aboutPage/AboutPage';
import MainPage from './pages/mainPage/MainPage';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import UsersPage from './pages/usersPage/UsersPage';
import VideoPage from './pages/videoPage/VideoPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/portfolio" element={<PortfolioPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/video" element={<VideoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
