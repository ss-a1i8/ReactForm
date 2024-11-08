import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button 
        className="logout-btn"
        onClick={() => navigate("/login")}
        >
        Logout
      </button>
      <header className="header">
        <div className="container">
          <h1 className="home-header">Syeds Company</h1>
          <nav className="nav">
            <button
              className="admin-button"
              onClick={() => navigate("/admin-dashboard")}>
              Admin Dashboard
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section id="about" className="section about">
          <div className="container">
            <h2 className="patua-one-regular">About Our Company</h2>
            <p className="rubik-syed">
              Our company specializes in delivering high-quality products and
              services that meet the needs of our clients. We are committed to
              innovation, integrity, and excellence in everything we do.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <h2 className="patua-one-regular">Contact Us</h2>
            <p className="rubik-syed">For inquiries, please reach out to us at:</p>
            <p className="rubik-syed">
              Email: <a href="mailto:info@ourcompany.com" className="link">info@syedcorp@gmail.com</a>
            </p>
            <p className="rubik-syed">Phone: 07366612337</p>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer">
        <div className="container">
          <p className="rubik-syed">
            &copy; 2024 Our Company. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;