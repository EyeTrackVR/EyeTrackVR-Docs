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

/**
 * Pointer highlight for the "frosted" controls, ported from the landing page's
 * script.js: a small radial gradient follows the cursor inside the surface via
 * --pointer-x / --pointer-y. Delegated from the document so it keeps working
 * after client-side navigation, and skipped for touch and reduced motion.
 */
function setupFrostedGlow() {
    const FROSTED = '.VPButton.alt, .VPSocialLink'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const surfaceOf = (target: EventTarget | null) =>
        target instanceof Element ? target.closest<HTMLElement>(FROSTED) : null

    document.addEventListener('pointermove', (event) => {
        const surface = surfaceOf(event.target)
        if (!surface || event.pointerType === 'touch' || reducedMotion.matches) {
            return
        }
        const bounds = surface.getBoundingClientRect()
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => {
            surface.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
            surface.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
        })
    })

    document.addEventListener('pointerout', (event) => {
        const surface = surfaceOf(event.target)
        if (!surface || surface.contains(event.relatedTarget as Node)) {
            return
        }
        surface.style.removeProperty('--pointer-x')
        surface.style.removeProperty('--pointer-y')
    })
}

const CustomTheme = {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp?.(ctx)
        if (inBrowser) {
            setupFrostedGlow()
        }
    },
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
