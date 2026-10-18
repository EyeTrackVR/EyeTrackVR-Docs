/**
 * SEO / structured-data layer for the EyeTrackVR docs.
 *
 * Everything here is derived at build time so individual markdown pages only
 * need two frontmatter keys (`title`, `description`) to produce a complete,
 * correct set of canonical + Open Graph + Twitter + JSON-LD tags.
 *
 * Frontmatter contract:
 *   title        string  concise, keyword-first page title (used in <title> and og:title)
 *   description  string  unique 120-160 char meta description
 *   noindex      true    archive/legacy pages: robots noindex + excluded from sitemap.xml
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { theme } from '../src/custom/theme'
import { faq } from '../src/static/faq'

const HERE = path.dirname(fileURLToPath(import.meta.url))

export const SRC_DIR = path.resolve(HERE, '../src/pages')
export const PUBLIC_DIR = path.join(SRC_DIR, 'public')

export const SITE = {
  url: 'https://docs.eyetrackvr.dev',
  name: 'EyeTrackVR',
  shortName: 'ETVR',
  title: 'EyeTrackVR Docs',
  tagline: 'Open source, affordable VR eye tracking for VRChat and PCVR',
  description:
    'Official EyeTrackVR documentation: build an open-source, affordable VR eye tracker for VRChat, social VR and PCVR. Works with nearly all headsets.',
  locale: 'en_US',
  lang: 'en',
  ogImage: '/og-image.png',
  logo: '/logo_no_bg.png',
  twitter: '@EyeTrackVR',
  sameAs: [
    'https://github.com/EyeTrackVR',
    'https://discord.gg/kkXYbVykZX',
    'https://store.eyetrackvr.dev/',
    'https://eyetrackvr.dev/',
  ],
}

const ABS = (href) => `${SITE.url}${href.startsWith('/') ? href : `/${href}`}`

/** `how_to_build/part_list.md` -> `https://docs.eyetrackvr.dev/how_to_build/part_list` */
export function pageUrl(relativePath) {
  if (!relativePath || relativePath === 'index.md') return `${SITE.url}/`
  const clean = relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1')
  return ABS(clean)
}

/** Sidebar links -> { text, group } so breadcrumbs match the human navigation. */
const sidebarIndex = (() => {
  const map = new Map()
  for (const group of theme.sidebar ?? []) {
    for (const item of group.items ?? []) {
      const key = `/${String(item.link ?? '').replace(/^\//, '').replace(/\.md$/, '')}`
      map.set(key, { text: item.text, group: group.text })
    }
  }
  return map
})()

/**
 * Pages that opt out of indexing via `noindex: true` frontmatter. Read straight
 * from disk so the frontmatter stays the single source of truth for both the
 * robots meta tag and sitemap.xml filtering.
 */
function collectNoIndex(dir = SRC_DIR, acc = new Set()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectNoIndex(full, acc)
      continue
    }
    if (!entry.name.endsWith('.md')) continue
    const text = fs.readFileSync(full, 'utf-8')
    const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)
    if (fm && /^\s*noindex:\s*true\s*$/m.test(fm[1])) {
      acc.add(pageUrl(path.relative(SRC_DIR, full)))
    }
  }
  return acc
}

const noIndexUrls = collectNoIndex()

/** Human section name for a page, taken from the sidebar group it lives under. */
function sectionFor(relativePath) {
  const key = `/${relativePath
    .replace(/\.md$/, '')
    .replace(/(^|\/)index$/, '$1')
    .replace(/\/$/, '')}`
  return sidebarIndex.get(key)?.group || (path.dirname(relativePath) === '.' ? 'Overview' : path.dirname(relativePath))
}

/** Drop no-index pages from sitemap.xml (rc.20 ignores `sitemap: false` frontmatter). */
export function transformSitemapItems(items) {
  return items.filter((item) => {
    const url = ABS(String(item.url).replace(/index\.html$/, ''))
    return !noIndexUrls.has(url) && !noIndexUrls.has(url.replace(/\/$/, ''))
  })
}

/* ------------------------------------------------------------------ schema.org */

const organization = {
  '@type': 'Organization',
  '@id': `${SITE.url}/#/organization`,
  name: SITE.name,
  alternateName: SITE.shortName,
  url: `${SITE.url}/`,
  logo: ABS(SITE.logo),
  description: SITE.description,
  sameAs: SITE.sameAs,
}

const webSite = {
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.title,
  description: SITE.description,
  inLanguage: SITE.lang,
  publisher: { '@id': `${SITE.url}/#/organization` },
}

function breadcrumbList({ url, title, relativePath }) {
  const key = `/${relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1')}`
  const entry = sidebarIndex.get(key.replace(/\/$/, ''))
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` }]
  if (entry?.group) {
    items.push({ '@type': 'ListItem', position: items.length + 1, name: entry.group })
  }
  items.push({ '@type': 'ListItem', position: items.length + 1, name: title, item: url })
  return { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: items }
}

function techArticle({ url, title, description, relativePath, lastUpdated }) {
  const key = `/${relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1')}`
  const article = {
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: title,
    description,
    inLanguage: SITE.lang,
    isPartOf: { '@id': `${SITE.url}/#website` },
    publisher: { '@id': `${SITE.url}/#/organization` },
    author: { '@id': `${SITE.url}/#/organization` },
    image: [ABS(SITE.ogImage)],
    url,
  }
  const section = sidebarIndex.get(key.replace(/\/$/, ''))?.group
  if (section) article.articleSection = section
  if (lastUpdated) {
    const iso = new Date(lastUpdated).toISOString()
    article.dateModified = iso
    article.datePublished = iso
  }
  return article
}

function faqPage() {
  return {
    '@type': 'FAQPage',
    '@id': `${ABS('/misc/faq')}#faq`,
    mainEntity: (faq.faq ?? []).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/* ------------------------------------------------------------------- head tags */

/** Sitewide <head> additions: icons, theme colour, third-party preconnects. */
export const headTags = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo_no_bg.svg' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
  ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#b5a0ee' }],
  ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
  ['meta', { name: 'theme-color', content: '#09090c' }],
  ['meta', { name: 'color-scheme', content: 'light dark' }],
  // The intro page embeds a Discord banner and the contact page iframes the
  // Discord widget; resolving those hosts early keeps LCP off the third party.
  ['link', { rel: 'preconnect', href: 'https://discord.com', crossorigin: '' }],
  ['link', { rel: 'dns-prefetch', href: 'https://cdn.discordapp.com' }],
]

/**
 * Canonical + Open Graph + Twitter + JSON-LD for every rendered page.
 * VitePress already emits `<title>` and `<meta name="description">`, so those
 * are deliberately not duplicated here.
 */
export function transformHead({ pageData }) {
  if (pageData.isNotFound) return []

  const isHome = pageData.relativePath === 'index.md'
  const url = pageUrl(pageData.relativePath)
  const title = isHome ? SITE.title : pageData.title || SITE.title
  const description = pageData.description || SITE.description
  // don't repeat the brand when the page title already carries it
  const branded = title.toLowerCase().includes(SITE.name.toLowerCase()) ||
    title.toLowerCase().includes(SITE.shortName.toLowerCase())
  const ogTitle = isHome
    ? 'EyeTrackVR: Open Source and Affordable VR Eye Tracking'
    : branded ? title : `${title} - ${SITE.name}`
  const image = ABS(SITE.ogImage)

  const head = [
    ['link', { rel: 'canonical', href: url }],
    ['meta', { property: 'og:type', content: isHome ? 'website' : 'article' }],
    ['meta', { property: 'og:site_name', content: SITE.title }],
    ['meta', { property: 'og:locale', content: SITE.locale }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: image }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: `EyeTrackVR: ${SITE.tagline}` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: ogTitle }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: image }],
    ['meta', { name: 'twitter:image:alt', content: `EyeTrackVR: ${SITE.tagline}` }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ]

  if (noIndexUrls.has(url)) {
    head.push(['meta', { name: 'robots', content: 'noindex, follow' }])
  }

  const graph = [organization, webSite]
  if (!isHome) {
    graph.push(
      techArticle({
        url,
        title,
        description,
        relativePath: pageData.relativePath,
        lastUpdated: pageData.lastUpdated,
      }),
      breadcrumbList({ url, title, relativePath: pageData.relativePath }),
    )
  }
  if (pageData.relativePath === 'misc/faq.md') graph.push(faqPage())

  head.push([
    'script',
    { type: 'application/ld+json' },
    JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
  ])

  return head
}

/* ------------------------------------------------------------------- llms.txt */

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/
const YAML_LINE = /^([A-Za-z0-9_-]+):\s*(.*)$/

function readFrontmatter(text) {
  const match = FRONTMATTER_RE.exec(text)
  const data = {}
  if (!match) return { data, body: text }
  for (const line of match[1].split(/\r?\n/)) {
    const kv = YAML_LINE.exec(line.trim())
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, '')
  }
  return { data, body: text.slice(match[0].length) }
}

function listMarkdown(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) listMarkdown(full, acc)
    else if (entry.name.endsWith('.md')) acc.push(full)
  }
  return acc
}

const stripNoise = (md) =>
  md
    .replace(/<script setup>[\s\S]*?<\/script>/g, '')
    // Vue widgets render nothing useful as plain text
    .replace(/<VPTeamPage>[\s\S]*?<\/VPTeamPage>/g, '[Team page - see the live page]')
    .replace(/^\s*<(ImageCard|Alerts|FAQ|Accordion|CheckBoxList)[^>]*\/>\s*$/gm, '')
    .replace(/^:::(danger|warning|tip|info|note)[\s\S]*?^:::/gm, '')
    .replace(/<\/?(div|span|figure|figcaption|details|summary|center|br|iframe|p|a|img|table|thead|tbody|tr|td|th|h[1-6])\b[^>]*>/gi, '')
    .replace(/\{\.[^}]*\}/g, '')
    .replace(/\?\?\s*\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+\n/g, '\n')
    .trim()

/**
 * Emit llms.txt (curated index) and llms-full.txt (every page, concatenated)
 * into the build output so LLM answer engines can ingest the docs without
 * scraping. Called from `buildEnd`.
 */
export function writeLlmsTxt(outDir) {
  const dir = outDir || PUBLIC_DIR
  fs.mkdirSync(dir, { recursive: true })

  const pages = listMarkdown(SRC_DIR)
    .map((file) => {
      const relativePath = path.relative(SRC_DIR, file)
      const { data, body } = readFrontmatter(fs.readFileSync(file, 'utf-8'))
      return {
        relativePath,
        url: pageUrl(relativePath),
        title: data.title || relativePath,
        description: data.description || SITE.description,
        noindex: data.noindex === 'true',
        body: stripNoise(body),
      }
    })
    .filter((page) => !page.noindex && page.relativePath !== 'index.md')

  const sections = new Map()
  for (const page of pages) {
    const key = sectionFor(page.relativePath)
    if (!sections.has(key)) sections.set(key, [])
    sections.get(key).push(page)
  }

  const lines = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    `EyeTrackVR (ETVR) is an open-source, community-built eye tracking platform for VR headsets.`,
    `Hardware, firmware and app source are all free. Tracking data is sent over OSC/UDP and never leaves the user's PC.`,
    '',
    `Site: ${SITE.url}`,
    `Source: https://github.com/EyeTrackVR/EyeTrackVR-Docs`,
    `Community: https://discord.gg/kkXYbVykZX`,
    '',
  ]
  for (const [section, items] of sections) {
    lines.push(`## ${section}`, '')
    for (const page of items) lines.push(`- [${page.title}](${page.url}): ${page.description}`)
    lines.push('')
  }
  fs.writeFileSync(path.join(dir, 'llms.txt'), lines.join('\n'))

  const full = [
    `# ${SITE.title}`,
    '',
    `> ${SITE.description}`,
    '',
    ...pages.map((page) => [`\n---\nsource: ${page.url}\ntitle: ${page.title}\n---\n`, page.body].join('\n')),
  ]
  fs.writeFileSync(path.join(dir, 'llms-full.txt'), full.join('\n'))

  return { pages: pages.length, dir }
}
