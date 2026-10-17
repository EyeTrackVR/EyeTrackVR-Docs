//https://vitepress.vuejs.org/guide/theme-introduction#customizing-css
import { ThemeSettings } from '../../src/custom/theme'
import { inBrowser, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '../../src/styles/imports.css'
import { h, watchEffect } from 'vue'

/**
 * Two-tone wordmark, matching the eyetrackvr.dev brand: "EyeTrack" in the
 * surrounding text colour and "VR" in the #b5a0ee accent.
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
        const { lang } = useData()
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
            }
        })
    },
    Layout: () =>
        h(DefaultTheme.Layout, null, {
            'nav-bar-title-after': () => h(ETVRWordmark)
        }),
    ...ThemeSettings
}

export default CustomTheme
