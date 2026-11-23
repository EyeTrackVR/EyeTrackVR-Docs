//https://vitepress.vuejs.org/guide/theme-introduction#customizing-css
import { ThemeSettings } from '../../src/custom/theme'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '../../src/styles/imports.css'
import { h, onMounted, watch, watchEffect } from 'vue'

/**
 * The light/dark choice is shared with the landing page (eyetrackvr.dev)
 * through an `etvr-theme` cookie on the parent domain; its script.js reads and
 * writes the same cookie. Reading it on first paint happens in a head script,
 * see `headTags` in ../seo.js.
 */
const THEME_COOKIE = 'etvr-theme'

const readSharedTheme = () =>
    document.cookie.match(/(?:^|; )etvr-theme=(dark|light)/)?.[1]

const writeSharedTheme = (theme: 'dark' | 'light') => {
    const domain = /(^|\.)eyetrackvr\.dev$/.test(location.hostname) ? '; domain=eyetrackvr.dev' : ''
    const secure = location.protocol === 'https:' ? '; secure' : ''
    document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=31536000; samesite=lax${domain}${secure}`
}

/**
 * Two-tone wordmark: "EyeTrack" in the surrounding text colour and "VR" in the
 * brand purple (see `.brand-vr` in theme.css).
 *
 * VitePress interpolates `themeConfig.siteTitle` as plain text, so the
 * wordmark is injected through the layout's `nav-bar-title-after` slot and
 * `siteTitle` is switched off in the theme config.
 */
const ETVRWordmark = () =>
    h('span', { class: 'etvr-wordmark' }, [
        'EyeTrack',
        h('span', { class: 'brand-vr' }, 'VR'),
        ' Docs'
    ])

const CustomTheme = {
    ...DefaultTheme,
    setup() {
        const { lang, isDark } = useData()
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
            }
        })
        // Only a change made here is written, so a first visit does not
        // overwrite a choice made on the landing page.
        watch(isDark, (dark) => {
            if (inBrowser) writeSharedTheme(dark ? 'dark' : 'light')
        })
        // Coming back to this page (back button, or another tab) after
        // switching on the landing page: follow that choice.
        onMounted(() => {
            const follow = () => {
                const theme = readSharedTheme()
                if (theme) isDark.value = theme === 'dark'
            }
            window.addEventListener('pageshow', follow)
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) follow()
            })
        })
    },
    Layout: () =>
        h(DefaultTheme.Layout, null, {
            'nav-bar-title-after': () => h(ETVRWordmark)
        }),
    ...ThemeSettings
}

export default CustomTheme
