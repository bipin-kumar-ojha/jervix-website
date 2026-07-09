import './App.css'
import Header from './components/layout/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/layout/Footer/Footer';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import RequestDemo from './components/RequestDemo/RequestDemo';
import { AboutPage, CareerPage, ContactPage, ProductsPage } from './pages/HeaderPages/HeaderMenuPage';
import ServicesPage from './pages/Services/ServicesPage';
import ServiceDetailPage from './pages/Services/ServiceDetailPage';

function App() {
 
  return (
    <>
      {/* <UnderDevelopmentPopup /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <RequestDemo />
      <Footer/>
    </>
  )
}

export default App
