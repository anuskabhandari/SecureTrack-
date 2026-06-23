export default function Login() {
  return (
    <div className="container py-5">

      <h2 className="text-center fw-bold mb-4">
        Login to SecureTrack
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-4">

          <input className="form-control mb-3" placeholder="Email" />
          <input className="form-control mb-3" placeholder="Password" type="password" />

          <button className="btn btn-primary w-100">
            Login
          </button>

        </div>
      </div>

    </div>
  );
}