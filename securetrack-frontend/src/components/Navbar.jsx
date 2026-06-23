import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="text-decoration-none">
          <h3 className="fw-bold text-primary m-0">
            🛡️ SecureTrack
          </h3>
        </Link>

        {/* Right side buttons */}
        <div className="d-flex">

          <Link to="/login">
            <button className="btn btn-outline-primary me-2">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="btn btn-primary">
              Get Started
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}