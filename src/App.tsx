import './App.css'
import Header from './components/layout/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/layout/Footer/Footer';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import RequestDemo from './components/RequestDemo/RequestDemo';

function App() {
 
  return (
    <>
      {/* <UnderDevelopmentPopup /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <RequestDemo />
      <Footer/>
    </>
  )
}

export default App
