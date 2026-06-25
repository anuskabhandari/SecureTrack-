import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setSuccess(false);
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        {
          username: form.username,
          email: form.email,
          password: form.password,
        }
      );

      setSuccess(true);
      setMessage(response.data.message);

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);

    } catch (error) {
      setSuccess(false);

      const data = error.response?.data;

      if (data?.username) {
        setMessage(data.username[0]);
      } else if (data?.email) {
        setMessage(data.email[0]);
      } else {
        setMessage("Registration failed");
      }
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">

      <div
        className="card shadow-lg border-0 rounded-4 p-5"
        style={{ width: "500px" }}
      >
        <h2 className="text-center fw-bold text-primary mb-4">
          Create Account
        </h2>

        {message && (
          <div
            className={`alert ${
              success ? "alert-success" : "alert-danger"
            }`}
          >
            {success ? "✓ " : "✕ "}
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Username
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              required
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            Create Account
          </button>

        </form>
      </div>

    </div>
  );
}