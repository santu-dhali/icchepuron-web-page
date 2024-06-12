import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Member from "./components/Member";
import Education from "./components/Education";
import Health from "./components/Health";


const AppLayout = ()=>{
  return(
    <div className="App">
      <Header/>
      <Health/>
      <Footer/>
    </div>
  )
}

export default AppLayout