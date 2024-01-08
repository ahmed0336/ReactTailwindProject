import './App.css';
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import lazy loader
import { Loader } from 'react-overlay-loader';
import 'react-overlay-loader/styles.css';
import { ToastContainer } from 'react-toastify';

const HomePage=lazy(()=>import('./pages/Home'))
const AboutPage=lazy(()=>import('./pages/About'))
const ServicesPage=lazy(()=>import('./pages/Services'))
const NotFoundPage=lazy(()=>import('./pages/NotFound'))


function App() {

  return (
    <>
 <Suspense fallback={<Loader fullPage loading />} >
 <ToastContainer />
    <BrowserRouter>
     <Routes>
     <Route path='/'  element={ <HomePage />}  />
     <Route path='/about' element={ <AboutPage />}  />
     <Route path='/service' element={ <ServicesPage />}  />

     <Route path='*' element={ <NotFoundPage />}  />

     </Routes>
    </BrowserRouter>

    </Suspense>
    
    
    
    </>
  );
}

export default App;
