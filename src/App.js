import './scss/app.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { routesForRender } from './router/RoutesForRender';
import Page404 from './pages/Page404';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routesForRender.map((route) => (
          <Route key={route.key} path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
