import Apresentation from "./components/Apresentation"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
  return (
    <div className="bg-[#161616] h-screen px-16 py-8">
      <Header />
      <Apresentation />
      <Main />
      <Footer />
    </div>
  )
}

export default App