import { tunes } from "../data"

const escapeXml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")

export async function GET() {
  const sortedTunes = [...tunes].sort((a, b) => (b.year ?? 0) - (a.year ?? 0))

  const items = sortedTunes
    .map((tune) => {
      const link = `https://specialtunes.com/tunes/${tune.id}`
      const title = escapeXml(`${tune.artist} - ${tune.title}`)
      const description = escapeXml(tune.text)
      return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${description}</description>
      <category>${tune.category === "evergreen" ? "Evergreen" : "Hottest New Music"}</category>
    </item>`
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Special Tunes</title>
    <link>https://specialtunes.com</link>
    <description>A curated selection of electronic music</description>
    <language>en</language>
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}