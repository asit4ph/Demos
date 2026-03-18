import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home — Navbar FIXED upar float karega, HeroSection full screen */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-[#f9f9f9] text-[#2d3435]">
              {/* Navbar fixed — kisi bhi section ke upar float karega */}
              <Navbar />
              <main>
                <HomePage />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Login — full screen */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}   