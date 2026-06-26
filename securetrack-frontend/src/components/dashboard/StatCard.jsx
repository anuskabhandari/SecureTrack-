export default function StatCard({ title, value, color }) {

    return (

        <div className="stat-card">

            <h5>{title}</h5>

            <h2 style={{ color }}>
                {value}
            </h2>

        </div>

    );

}