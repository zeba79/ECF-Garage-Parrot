import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Fotter/Footer'
import { styled } from 'styled-components';



function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

const Main = styled.div`
min-height: calc(100vh - 160px);`;

export default App;
