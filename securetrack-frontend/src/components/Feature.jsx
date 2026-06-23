export default function Features() {

  const features = [
    {
      title: "🛡 Vulnerability Tracking",
      desc: "Report, track, and manage security vulnerabilities in real time."
    },
    {
      title: "🚨 Incident Management",
      desc: "Handle security incidents and assign them to developers."
    },
    {
      title: "🤖 AI Risk Analysis",
      desc: "Automatically predict severity and prioritize threats."
    },
    {
      title: "📊 Analytics Dashboard",
      desc: "Visualize security data for better decision making."
    }
  ];

  return (
    <div className="container py-5">

      <h2 className="section-title text-center mb-5">
        Key Features
      </h2>

      <div className="row g-4">

        {features.map((feature, index) => (
          <div className="col-md-3" key={index}>
            <div className="glass-card p-4 h-100 text-center">

              <h5>{feature.title}</h5>

              <p className="text-secondary mt-2">
                {feature.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}