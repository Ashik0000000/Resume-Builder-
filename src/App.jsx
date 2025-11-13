import './App.css'
import { Route,Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ResumeGenerator from  './pages/ResumeGenerator'
import History from './pages/History'
import UserForm from './pages/UserForm'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewResume from './pages/ViewResume'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/resume' element={<ResumeGenerator/>}/>
      <Route path='/form' element={<UserForm/>}/>
      <Route path='/history' element={<History/>}/>
      {/* dynamic url r prefix with':' value will be stored in variable after column  */}
      <Route path='/resume/:id/view' element={<ViewResume/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
   
    </>
  )
}

export default App
