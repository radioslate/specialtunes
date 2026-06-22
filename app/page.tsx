import { tunes } from "./data"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-light tracking-widest uppercase mb-2">
          Special Tunes
        </h1>
        <p className="text-zinc-500 text-sm tracking-wide mb-16">
          A curated selection of electronic music
        </p>

        <div className="space-y-6">
          {tunes.map((tune) => (
            <Link
              key={tune.id}
              href={`/tunes/${tune.id}`}
              className="block border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-500">
                {tune.category === "evergreen" ? "Evergreen" : "New Release"}
              </span>
              <h2 className="text-xl mt-2 mb-1">
                {tune.artist} — {tune.title}
              </h2>
              <p className="text-zinc-500 text-sm">{tune.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}