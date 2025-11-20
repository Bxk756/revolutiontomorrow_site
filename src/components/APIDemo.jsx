export default function APIDemo() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Try the AI Prototype</h2>

      <p className="text-center opacity-80 mb-10">
        Real-time anomaly detection · Edge powered · API-first
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="bg-black/40 border border-white/20 p-6 rounded-xl mb-6">
          <pre className="text-sm whitespace-pre-wrap">
{`POST https://api.revolutiontomorrow.cloud/score
{
  "input": "User attempting privileged escalation",
  "mode": "threat_detector"
}`}
          </pre>
        </div>

        <button className="w-full py-3 bg-cyber text-black font-semibold rounded-lg">
          ▶ Run Sample Request
        </button>
      </div>
    </section>
  );
}
