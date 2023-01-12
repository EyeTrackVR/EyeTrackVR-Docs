// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { theme } from '../src/custom/theme'

export default defineConfig({
    outDir: './.vitepress/out',
    srcDir: './src/pages',
    cleanUrls: 'with-subfolders',
    /* head: [
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        ]
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ], */
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    lastUpdated: true,
    title: 'EyeTrackVR Docs',
    description: 'The official documentation for EyeTrackVR',
    themeConfig: theme,
})