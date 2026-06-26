"use client"

import { tunes } from "./data"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [filter, setFilter] = useState<"all" | "evergreen" | "new">("all")

  const filteredTunes = tunes.filter((tune) => {
    if (filter === "all") return true
return tune.category === filter
  })
  .sort((a, b) => {
  const aDate = a.dateAdded ?? `${a.year}-01-01`
  const bDate = b.dateAdded ?? `${b.year}-01-01`
  return bDate.localeCompare(aDate)
})

  const playlistUrl = `https://www.youtube.com/watch_videos?video_ids=${filteredTunes.map((t) => t.youtubeId).join(",")}`

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold tracking-tight mb-4">
          Special Tunes
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed font-light tracking-wide mb-10 max-w-lg">
          Too much music but too little magic? Special Tunes is where house and techno's extraordinary records get found, felt, and remembered.
        </p>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${filter === "all" ? "bg-white text-black border-white" : "border-zinc-700 text-zinc-400 hover:border-zinc-500"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("evergreen")}
            className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${filter === "evergreen" ? "bg-white text-black border-white" : "border-zinc-700 text-zinc-400 hover:border-zinc-500"}`}
          >
            Evergreen
          </button>
          <button
            onClick={() => setFilter("new")}
            className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-colors ${filter === "new" ? "bg-white text-black border-white" : "border-zinc-700 text-zinc-400 hover:border-zinc-500"}`}
          >
            Hottest New Music
          </button>
        </div>

        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mb-16"
        >
          Play all on YouTube
        </a>

        <div className="space-y-10">
          {filteredTunes.map((tune) => (
            <Link key={tune.id} href={`/tunes/${tune.id}`} className="group block">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                <img
                  src={`https://img.youtube.com/vi/${tune.youtubeId}/hqdefault.jpg`}
                  alt={`${tune.artist} - ${tune.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                <span className="absolute top-3 left-3 text-xs uppercase tracking-widest bg-black/60 px-2 py-1 rounded">
                  {tune.category === "evergreen" ? "Evergreen" : "Hottest New Music"}
                </span>{tune.dateAdded && (
  <span className="absolute top-3 right-3 text-xs bg-black/60 px-2 py-1 rounded text-zinc-300">
    Added {tune.dateAdded}
  </span>
)}
              </div>
              <h2 className="text-xl mb-1 group-hover:text-zinc-300 transition-colors">
                {tune.artist} — {tune.title}
              </h2>
              <p className="text-zinc-500 text-sm">{tune.year}</p>
            </Link>
          ))}
        </div>
      </div>
    <footer className="mt-20 pt-8 border-t border-zinc-800">
  <Link href="/impressum" className="text-zinc-500 text-xs hover:text-zinc-300 transition-colors">
    Impressum
  </Link>
</footer> </main>
  )
}
