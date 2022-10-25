import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import FormPage from './pages/formPage/FormPage';
import UserPage from './pages/userPage/UserPage';
import UserPage2 from './pages/userPage2/UserPage2';
import HelloPage from './pages/helloPage/HelloPage';

function App() {
  return (
    <div className="App">
      <UserPage/>
      <h1>-----------------------</h1>
      <UserPage2/>
      <h1>-----------------------</h1>
      <HelloPage/>
    </div>
  );
}

export default App;
