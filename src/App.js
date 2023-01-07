import './App.css'
import { Route, Router } from "react-router-dom"
import CryptoMainContainer from './Components/Crypto/CryptoMainContainer'
import HeaderContainer from './Components/Header/HeaderContainer.js'
import Footer from './Components/Footer/Footer'
import HeaderMobile from './Components/HeaderMobile/HeaderMobile.js'
import CryptoMainMobile from './Components/CryptoMobile/CryptoMobile.js'
import FAQMobile from './Components/CryptoMobile/FAQ/FAQMobile'
import FAQ from './Components/Crypto/FAQ/FAQ'
import { createBrowserHistory } from 'history'

const newHistory = createBrowserHistory();

function App() {
  return (
    <Router history={newHistory}>
      <div className="main-container">
          <div className="main-mobile">
            <Route exact path="" component={HeaderMobile} />
            <Route exact path="/" component={CryptoMainMobile} />
            <Route exact path="/Crypto" component={CryptoMainMobile} />
            <Route exact path="/FAQ" component={FAQMobile} />
          </div>
          <div className="main">
            <Route exact path="" component={HeaderContainer} />
            <Route exact path="/" component={CryptoMainContainer} />
            <Route exact path="/Crypto" component={CryptoMainContainer} />
            <Route exact path="/FAQ" component={FAQ} />
            {/* <Footer /> */}
          </div>
      </div>
    </Router>
  );
}

export default App;
