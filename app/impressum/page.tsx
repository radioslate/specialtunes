import Link from "next/link"

export default function Impressum() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
        >
          ← Back
        </Link>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-tight mt-8 mb-8">
          Impressum
        </h1>

        <div className="text-zinc-300 leading-relaxed space-y-2">
          <p>TS MarketingMasterMind GmbH</p>
          <p>Schachadorf 72</p>
          <p>4552 Wartberg an der Krems, Austria</p>
          <p>CEO: Thomas Schiefer</p>
        </div>

        <p className="text-zinc-400 leading-relaxed mt-8">
          Special Tunes is a non-commercial passion project. It does not pursue any commercial goals or generate revenue.
        </p>
      </div>
    </main>
  )
}