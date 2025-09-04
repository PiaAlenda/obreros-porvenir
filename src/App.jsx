import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import About from "./components/layout/About"
import EducationalOffer from "./components/layout/EducationalOffer"
import InfoForm from "./components/layout/InfoForm"
import Location from "./components/layout/Location"   
import Programs from "./components/layout/Programs"
import NewsEvents from "./components/layout/NewsEvents"
import Footer from "./components/layout/Footer"
import "./styles/Global.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <EducationalOffer />
      <Programs />
      <NewsEvents />
       <Location/>
      <InfoForm />
      <Footer />
    </div>
  )
}

export default App
