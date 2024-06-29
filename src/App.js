import './App.css';
import Ajouter from './ajouter/page-dashboard';
import Apropos from './a propos/apropos';
import Home from './acceuil/page-home';
import Navbar from './acceuil/navbar';
import Footer from './acceuil/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './article/details';
import FormulairePage from './ajouter/page-Formulaire';
import Table from './ajouter/page-dashboard';
import { ArticleProvider } from './context/ArticleContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    
    return (
        <ArticleProvider>
        <BrowserRouter>
        <div>
        <ToastContainer />
      </div>
            <Navbar />
            <body>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/ajouter" element={<FormulairePage />} />
                <Route path="/afficher" element={<Table />} /> 
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/article/:id" element={<Details />} />
             
            </Routes>
            </body>
            <Footer />
        </BrowserRouter>
        </ArticleProvider>

    );
}

export default App;

