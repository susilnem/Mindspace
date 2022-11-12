import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from "./pages/Homepage";
import LoginForm from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/services' element={<LoginForm />} />
          <Route path='/Blog' element={<LoginForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
