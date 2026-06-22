import { tunes } from "../../data"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function TunePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const tune = tunes.find((t) => t.id === id)

  if (!tune) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
        >
          ← Back
        </Link>

        <div className="mt-8">
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            {tune.category === "evergreen" ? "Evergreen" : "New Release"}
          </span>
          <h1 className="text-2xl mt-2 mb-1">
            {tune.artist} — {tune.title}
          </h1>
          <p className="text-zinc-500 text-sm mb-8">{tune.year}</p>

          <div className="aspect-video w-full mb-8">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${tune.youtubeId}`}
              title={`${tune.artist} - ${tune.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="text-zinc-300 leading-relaxed">{tune.text}</p>
        </div>
      </div>
    </main>
  )
}