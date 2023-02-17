import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header/header';
//pages
import Home from './pages/Home/home';
import Quadros from './pages/Quadros/quadros';
import Favoritos from './pages/Favoritos/favoritos';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quadros/id" element={<Quadros />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}
