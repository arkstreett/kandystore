import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="home-quote">
        <h1>Kandy Island ®</h1>
        <p>We currently have no candy... sorry</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
