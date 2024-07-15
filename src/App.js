import logo from './image 73.png';
import logoText from './PHOENIX.png'
import './App.css';
import PartnersSlider from './partnersSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontSize: '42px'}}>
          Нам не нужен сайт, о нас могут сказать:
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <img  src={logoText}  alt="logo" />
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className='container'>
          <PartnersSlider/>
        </div>
        <div className='footer'>
          <div className='footerItem'>
            <div className='footerTitle'>Локация:</div>
            <div className='footerText'>Ташкент, Юнусабад 16б 28А</div>
          </div>
          <div className='footerItem'>
          <div className='footerTitle'>Телефон:</div>
          <div className='footerText'> <a className='footerLink' href='tel:+998971003021'>+99897-100-30-21</a></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
