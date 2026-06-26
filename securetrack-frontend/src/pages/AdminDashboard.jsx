import DashboardLayout from "../components/dashboard/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";

export default function AdminDashboard() {

    return (

        <DashboardLayout role="Admin">

            <div className="cards">

                <StatCard
                    title="Total Users"
                    value="125"
                    color="#2563eb"
                />

                <StatCard
                    title="Vulnerabilities"
                    value="42"
                    color="#ef4444"
                />

                <StatCard
                    title="Open Incidents"
                    value="13"
                    color="#f59e0b"
                />

                <StatCard
                    title="Resolved"
                    value="29"
                    color="#10b981"
                />

            </div>

            <div className="table-card">

                <h3>Recent Activities</h3>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Activity</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>#101</td>

                            <td>SQL Injection</td>

                            <td>Critical</td>

                        </tr>

                        <tr>

                            <td>#102</td>

                            <td>XSS</td>

                            <td>Open</td>

                        </tr>

                        <tr>

                            <td>#103</td>

                            <td>CSRF</td>

                            <td>Resolved</td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}