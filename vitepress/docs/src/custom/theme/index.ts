//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'
import { type ThemeConfig } from "../../static/types/interfaces"

const theme: ThemeConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'EyeTrackVR Logo',
    },
    siteTitle: 'EyeTrackVR Docs',
    /* Note the footer will not show when sidebar is active */
    message: "Released under the MIT License.",
    copyright: "Copyright © 2022-present ETVR",
    nav: [
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" },
        { text: "Guide", link: "/guide" },
        { text: "Configs", link: "/configs" },
        { text: "Changelog", link: "https://github.com/..." },
        {
            text: 'Dropdown Menu',
            items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
            ]
        }
    ],
    sidebar: [
        {
            text: "Section A",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
        {
            text: "Section B",
            collapsible: false,
            items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
        {
            text: "Section C",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
            ],
        },
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/RedHawk989/EyeTrackVR' },
        { icon: 'discord', link: 'https://discord.gg/kkXYbVykZX' },
        // You can also add custom icons by passing SVG as string:
        /* {
            icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            },
            link: '...'
        } */
    ]
}

const ThemeSettings = {}

export { theme, ThemeConfig, ThemeSettings }