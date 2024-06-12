import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Member from "./components/Member";
import Education from "./components/Education";


const AppLayout = ()=>{
  return(
    <div className="App">
      <Header/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default AppLayout