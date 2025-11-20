export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Revolutionizing Tomorrow <span className="text-cyber">Starts Today</span>
      </h1>

      <p className="text-lg max-w-2xl opacity-90 mb-8">
        AI systems engineered to accelerate innovation, secure digital 
        infrastructure, and unlock the next era of intelligent technology.
      </p>

      <div className="flex gap-4">
        <a href="#" className="px-6 py-3 bg-cyber text-black rounded-lg font-semibold">
          Launch Prototype
        </a>
        <a href="#" className="px-6 py-3 bg-violet text-white rounded-lg font-semibold">
          Docs & API
        </a>
      </div>
    </section>
  );
}
