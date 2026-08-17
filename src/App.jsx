
// // import './App.css'
// // import Navbar from './Navbar.jsx'
// // import Header from './Header.jsx'
// // import Footer from './Footer.jsx'
// // import Counter from './Couter.jsx'
// import Program from './Program.jsx'

// function App() {
//   // let x=[10,20,30];
//   let obj={
//     "name" : "anitas" ,
//     "age":23
//   }
//   function sayhello(){
//     alert("rifhiurbj alert");
//   }
 
//   return (
//   <div>
//     {/* <Navbar/>
//     <Header/>
//     <Footer/> 
//     <Counter/> */}
//     {/* <Program value={x}/> */}
//     {/* <Program value={obj}/>  */}
//     <Program value={sayhello}/>

    
//     {
    
//     }
//   </div>
//   )
// }

// export default App

import {Route, Routes} from "react-router-dom"
import Home from './Home'
import About from "./About"
import Contect from "./Contect"
function App(){
  
  return(
    <>
     <Routes>
         <Route element={<Home/>} path='/'/>
         <Route element={<About/>} path='/About'/>
         <Route element={<Contect/>} path='/Contect'/>
     </Routes>
    </>
  )
}

export default App;