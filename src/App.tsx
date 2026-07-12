import './App.css'
import Header from './components/layout/Header'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Internship from './pages/Internship/Internship';
import Footer from './components/layout/Footer/Footer';
import BlogDetail from './pages/BlogDetail/BlogDetail';
import RequestDemo from './components/RequestDemo/RequestDemo';
import { CareerPage, ContactPage, ProductsPage } from './pages/HeaderPages/HeaderMenuPage';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import ServiceDetailPage from './pages/Services/ServiceDetailPage';
import IndustriesPage from './pages/Industries/IndustriesPage';

function App() {
 
  return (
    <>
      {/* <UnderDevelopmentPopup /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers/internship" element={<Internship />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/solutions" element={<ProductsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <RequestDemo />
      <Footer/>
    </>
  )
}

export default App
