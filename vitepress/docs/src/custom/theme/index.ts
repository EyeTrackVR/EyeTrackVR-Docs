//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'

const theme = {
    logo: {
        light: '/logo.svg', dark: '/logo.svg', alt: 'EyeTrackVR Logo'
    },
    siteTitle: 'EyeTrackVR Docs',
    /* Note the footer will not show when sidebar is active */
    footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2022-present ETVR",
    },
    searchPlaceholder: "Search...",
    nav: [
        { text: "About", link: "/about" },
        { text: "Contact", link: "/contact" },
        { text: "Guide", link: "/guide" },
        { text: "Configs", link: "/configs" },
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
        { icon: 'discord', link: 'https://discord.gg/kkXYbVykZX' }
    ]
}

const ThemeSettings = {}

export { theme, ThemeSettings }