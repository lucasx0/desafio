import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header/header';
//pages
import Home from './pages/Home/home';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
