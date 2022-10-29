import logo from './logo.svg';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import CountPage from './pages/countPage/CountPage';
import UsersPage from './pages/usersPage/UsersPage';
import FormPage from './pages/formPage/FormPage';
import AboutUS from './pages/aboutUs/AboutUs';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import ContactsPage from './pages/contactsPage/ContactsPage';

function App() {
  return (
    <div className="App">
      <AboutUS/>
      <h1>--------------------------</h1>
      <PortfolioPage/>
      <h1>--------------------------</h1>
      <ContactsPage/>

    </div>
  );
}

export default App;
