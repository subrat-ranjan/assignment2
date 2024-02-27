
import './App.css';
import Footer from './components/Footer';
// import image from "../public/asserts/1.png"

function App() {
  return (
    <div className="App">
      <div>
        <header className="header">
          <img src="/asserts/logo.png" alt="header" />
        </header>

        <div className="content">
          <nav className="nav">
            <img src="/asserts/1.png" alt="prize" />
          </nav>
          <main className="main">
            <div className='texts'>
              <h3> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
              <ul>
                <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>
                  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
            </div>
            <img src="/asserts/2.png" alt="main" />
            <div className='text'>
              <p> Government of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
          </main>
        </div>
        <div className='products'>
          <div className='about'>
            <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h4>
          </div>
          <img src="/asserts/3.png" alt="product" />
          <p align="center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          <div className='line'></div>
          <h5>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h5>
          <div class="container2">
            CHEMICALS <span class="separator"></span> PROCESS POWER <span class="separator"></span> WATER <span class="separator"></span> WASTE WATER <span class="separator"></span> OILS <span class="separator"></span> GAS <span class="separator"></span> PHARMA <span class="separator"></span> SUGARS <span class="separator"></span> DISTILLERIES <span class="separator"></span> PAPER <span class="separator"></span> PULP <span class="separator"></span> MARINE <span class="separator"></span> DEFENCE <span class="separator"></span> METAL <span class="separator"></span> MINING <span class="separator"></span> FOOD <span class="separator"></span> BEVERAGE <span class="separator"></span> PETROCHEMICAL <span class="separator"></span> REFINERIES <span class="separator"></span> SOLAR <span class="separator"></span> BUILDING <span class="separator"></span> HVAC <span class="separator"></span> FIRE FIGHTING <span class="separator"></span> AGRICULTURE <span class="separator"></span> RESIDENTIAL
          </div>

        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>

    </div>
  );
}

export default App;
