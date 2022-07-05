// import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar';
import logoMobile from './assets/logo-final-spiral.png';
import c1 from './assets/1.png';
import c2 from './assets/2.png';
import c3 from './assets/3.png';
function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className='Block1'>

        <div className='B1'>

          <div className='B1Text'>
            {/* <p>DIV 1</p> */}
            <h1>Easiest way to export fresh produce</h1>

            <p>ffresho connects exporters and importers, provides live prices and tools to negotiate terms. Book your shipments online within seconds. It's fast and free!</p>

            <button>Get Started</button>
          </div>

          <div className="B1Image">
            {/* <p>DIV 2</p> */}
            <img src={logoMobile} className="b1img" />
          </div>

        </div>

      </div>

      <div className='Block2'>
      <p className='B2p'>How does it work?</p>
        <div className='B2'>   
          
          <div className='B2Card'>
          <img src={c1} className="img"/>
            <h2>Import-Export</h2>
            <p>Live FOB & CIF prices on offer. Enquire for new products from reliable suppliers and send your own quotes. Create your company profile and create your own storefront. Trade globally with verified customers. All for free</p>

          </div>
          <div className='B2Card'>
          <img src={c2} className="img"/>
          <h2>Trade</h2>
            <p>We help both sides negotiate and close deals. Free help and guidance for new products or new geographies. Full transparency to both parties throughout the order and fulfilment process.</p>

          </div>
          <div className='B2Card'>
          <img src={c3} className="img"/>
            <h2>Terms & Documentation</h2>

            <p>You act as the consignor and consignee on your shipments. Keep track of all your enquiries, orders and shipments - all in one central dashboard.</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
