import './App.css'
import { Route, withRouter } from "react-router-dom"
import CryptoMainContainer from './Components/Crypto/CryptoMainContainer'
import HeaderContainer from './Components/Header/HeaderContainer.js'
import Footer from './Components/Footer/Footer'
import HeaderMobile from './Components/HeaderMobile/HeaderMobile.js'
import CryptoMainMobile from './Components/CryptoMobile/CryptoMobile.js'
import FAQMobile from './Components/CryptoMobile/FAQ/FAQMobile'
import FAQ from './Components/Crypto/FAQ/FAQ'

function App() {
  return (
    <div className="main-container">
        <div class="main-mobile">
          <HeaderMobile />
          <Route exact path="/" component={CryptoMainMobile} />
          <Route exact path="/Crypto" component={CryptoMainMobile} />
          <Route exact path="/FAQ" component={FAQMobile} />
        </div>
        <div className="main">
          <HeaderContainer />
          <Route exact path="/" component={CryptoMainContainer} />
          <Route exact path="/Crypto" component={CryptoMainContainer} />
          <Route exact path="/FAQ" component={FAQ} />
          <Footer />
        </div>
    </div>
  );
}

export default withRouter(App);
