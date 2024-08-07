import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
