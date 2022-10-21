import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import {Header, Footer, sayHello} from "./components/template/Template"
import UsersPage from './pages/usersPage/UsersPage';
import UserList from './components/usersList/UsersList';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
  return (
    <div className="App">
        <AboutUs/>
    </div>
  );
}

export default App;
