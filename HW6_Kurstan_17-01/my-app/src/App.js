import logo from './logo.svg';
import './App.css';
// import CountPage from './pages/countPage/CountPage';
import MainPage from './pages/mainPage/MainPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <div className="App">
          {/* <MainPage/> */}
          <RegisterPage/>
          {/* <UsersPage/> */}
    </div>
  );
}

export default App;
