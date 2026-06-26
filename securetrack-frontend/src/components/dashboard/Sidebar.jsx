import { Link } from "react-router-dom";

export default function Sidebar({ role }) {

  return (

    <div className="sidebar">

      <div className="logo">
        <h3>🛡 SecureTrack</h3>
      </div>

      <ul>

        <li>
          <Link to="#">Dashboard</Link>
        </li>

        <li>
          <Link to="#">Vulnerabilities</Link>
        </li>

        <li>
          <Link to="#">Incidents</Link>
        </li>

        {role === "Admin" && (

          <>

            <li>
              <Link to="#">Users</Link>
            </li>

            <li>
              <Link to="#">Analytics</Link>
            </li>

            <li>
              <Link to="#">Reports</Link>
            </li>

          </>

        )}

        {role === "Developer" && (

          <>

            <li>
              <Link to="#">My Tasks</Link>
            </li>

            <li>
              <Link to="#">Assigned Issues</Link>
            </li>

          </>

        )}

        {role === "User" && (

          <>

            <li>
              <Link to="#">Report Issue</Link>
            </li>

            <li>
              <Link to="#">My Reports</Link>
            </li>

          </>

        )}

        <li>
          <Link to="#">Profile</Link>
        </li>

        <li>
          <Link to="/">Logout</Link>
        </li>

      </ul>

    </div>

  );

}