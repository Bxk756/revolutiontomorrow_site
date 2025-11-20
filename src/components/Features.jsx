export default function Features() {
  const features = [
    {
      title: "Intelligent API Layer",
      desc: "Declarative, secure, and edge-fast. Optimized for real-time inference."
    },
    {
      title: "Agent Engine + Orchestrators",
      desc: "Deploy modular AI behaviors and workflows with zero friction."
    },
    {
      title: "Future-Proof Architecture",
      desc: "Cloudflare Workers + Vertex AI + Supabase + Edge inference."
    },
    {
      title: "Zero-Noise Security",
      desc: "Anomaly scoring, adversarial filtering, and agent-boundary control."
    }
  ];

  return (
    <section className="py-20 px-6 bg-midnight">
      <h2 className="text-4xl font-bold text-center mb-12">The Platform</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-6 border border-white/10 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="opacity-80 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
