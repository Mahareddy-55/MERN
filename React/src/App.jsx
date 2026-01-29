import Login from './Auth/Login'
import Signup from './Auth/SignUp'
import Counter from './component/Counter'
import Navbar from './component/Navbar'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import UseRef from './Hooks/UseRef'
import UseState from './Hooks/UseState'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'
import { Route, Routes } from 'react-router-dom'
import UseReducer  from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
const App = () =>{
 
  return(
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home name="maha"/>} />
      <Route path='/about' element={<About  name="maha" age={20} dept ='cse-ds'/>}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/login' element={<Login />}/>
      <Route path='/signUp' element={<Signup />}/>
      {/*Hooks*/}
      
      <Route path='/hook' element={<Hook />}>
        <Route path='useEffect' element={<UseEffect />}/>
        <Route path='useEffectApi' element={<UseEffectApi />}/>
        <Route path='useState'element={<UseState/>}/>
        <Route path='useref'element={<UseRef/>}/>
        <Route path='useReducer'element={<UseReducer/>}/>
         <Route path='useMemo'element={<UseMemo/>}/>
         <Route path='useCallback'element={<UseCallback/>}/>
      
      </Route>

    </Routes>
    </>
   
  )
}
export default App