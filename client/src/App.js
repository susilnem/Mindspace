import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import LoginForm from "./pages/AuthForm/Login";
import Signup from "./pages/AuthForm/Signup";
import Booking from "./components/booking/Booking";
import Services from "./components/Pricing/Services";
import Context from "./components/AboutUS/Context";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<Context />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
