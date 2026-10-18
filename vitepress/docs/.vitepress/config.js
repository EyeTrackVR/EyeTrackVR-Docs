// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { theme } from '../src/custom/theme'
import { SITE, headTags, transformHead, transformSitemapItems, writeLlmsTxt } from './seo'

export default defineConfig({
    vite: {
        assetsInclude: ['**/*.JPG']
    },
    outDir: './.vitepress/dist',
    srcDir: './src/pages',
    lang: 'en-US',
    // `with-subfolders` emitted slash-less links anyway on rc.20 while the
    // trailing-slash variants 404'd on GitHub Pages; `true` matches reality.
    cleanUrls: true,
    // Dead internal links are caught at build time now (they were silently
    // shipped before). External links are not checked by VitePress.
    ignoreDeadLinks: false,
    head: headTags,
    sitemap: {
        hostname: SITE.url,
        // archive/legacy pages carry `noindex: true` frontmatter and are
        // dropped here as well as in the robots meta tag.
        transformItems: transformSitemapItems,
    },
    transformHead,
    buildEnd: (siteConfig) => {
        const { pages } = writeLlmsTxt(siteConfig.outDir)
        console.log(`llms.txt + llms-full.txt written for ${pages} pages`)
    },

    /* head: [
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        ]
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ], */
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true,
        // Docs pages are image heavy; tell the browser to defer anything below
        // the fold instead of blocking on 200 screenshots.
        config: (md) => {
            const render = md.renderer.rules.image
            md.renderer.rules.image = (tokens, idx, options, env, self) => {
                const token = tokens[idx]
                if (!token.attrGet('loading')) token.attrSet('loading', 'lazy')
                if (!token.attrGet('decoding')) token.attrSet('decoding', 'async')
                return render
                    ? render(tokens, idx, options, env, self)
                    : self.renderToken(tokens, idx, options)
            }
        },
    },
    lastUpdated: true,
    title: 'EyeTrackVR Docs',
    // rc.20 only honours titleTemplate at site level; index.md opts out with
    // `titleTemplate: false` so the home page keeps the plain site title.
    titleTemplate: ':title - EyeTrackVR',
    description: 'Official documentation for EyeTrackVR. Fully open-source and affordable VR eye tracking platform.',
    themeConfig: theme,
})
