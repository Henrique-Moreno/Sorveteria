import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Historia from './pages/Historia';
import Header from './components/Header';
import Contato from './pages/Contato';
import Produtos from './pages/Produtos';
import Rodape from './components/Rodape';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/historia/' element={<Historia />} />
                <Route path='/contato/' element={<Contato />} />
                <Route path='/produtos' element={<Produtos />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default RoutesApp;