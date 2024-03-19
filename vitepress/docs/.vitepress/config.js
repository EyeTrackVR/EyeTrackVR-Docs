// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { theme } from '../src/custom/theme'

export default defineConfig({
    outDir: './.vitepress/dist',
    srcDir: './src/pages',
    cleanUrls: 'with-subfolders',
    ignoreDeadLinks: true,
    head: [
        // Corrected script tag example
        [
           'script',
           {
             async: true,
             src: '/src/assets/diy.js' // Corrected path format
           }
        ]
       ],
       
    /* head: [
        [
            'link',
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
        ]
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ], */
    markdown: {
        theme: 'material-theme-palenight',
        lineNumbers: true
    },
    lastUpdated: true,
    title: 'EyeTrackVR Docs',
    description: 'Official documentation for EyeTrackVR. Fully open-source and affordable VR eye tracking platform.',
    themeConfig: theme,
})