export default function Topbar({ role }) {

    const date = new Date().toLocaleDateString();

    return (

        <div className="topbar">

            <div>

                <h2>Dashboard</h2>

                <small>{date}</small>

            </div>

            <div className="top-right">

                <input
                    type="text"
                    placeholder="Search vulnerabilities..."
                />

                <button className="notification">

                    🔔

                </button>

                <div className="user">

                    👤 {role}

                </div>

            </div>

        </div>

    );

}