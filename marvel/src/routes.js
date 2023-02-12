import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Erro from './pages/Erro/error';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="*" element={<Erro />} />
      </Routes> */}
    </BrowserRouter>
  );
}
