
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import ResumeSteps from "./pages/ResumeSteps"
import UserForms from "./pages/UserForms"
import ViewResume from "./pages/ViewResume"
import Downloads from "./pages/Downloads"
import PageNotFound from "./pages/PageNotFound"
import Header from "./components/Header"
import Footer from "./components/Footer"






function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/steps'element={<ResumeSteps/>} />
      <Route path='/forms'element={<UserForms/>} />
      <Route path='/resume/:id/view'element={<ViewResume/>} />
      <Route path='/downloads'element={<Downloads/>} />
      <Route path='/*'element={<PageNotFound/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
