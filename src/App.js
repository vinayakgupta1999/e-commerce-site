import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Cart from './components/Cart';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

function PrivateRoute({ children }) {
  const currentuser = localStorage.getItem('currentuser')

  
  if (currentuser) {
      return children;
    }else{
    return <Navigate to="/login" />

  }

}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
          <Route path='/product' element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          } />
          <Route path='/cart' element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
