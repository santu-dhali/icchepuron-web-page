import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Member from "./components/Member";


const AppLayout = ()=>{
  return(
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default AppLayout