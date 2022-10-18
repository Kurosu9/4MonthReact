import logo from './logo.svg';
import './App.css';

function Title(props) {
  return (
    <h1>{props.title}</h1>
  )
}

function PortfolioPage() {
  return (
    <>
      <Title title="Portfolio Page"/>
    </>
  )
}

function App() {
  return (
    <div className="App">
        <PortfolioPage/>
    </div>
  );
}

export default App;
