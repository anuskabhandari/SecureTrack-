export default function Topbar({ role }) {

    return (

        <div className="topbar">

            <div>

                <h2>Dashboard</h2>

                <small>Welcome back!</small>

            </div>

            <div className="top-right">

                <input
                    type="text"
                    placeholder="Search..."
                />

                <span>🔔</span>

                <div className="user">

                    👤 {role}

                </div>

            </div>

        </div>

    );

}