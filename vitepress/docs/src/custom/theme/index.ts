//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'

const theme = {
    logo: {
        light: '/logo_light.png', dark: '/logo.svg', alt: 'EyeTrackVR Logo'
    },
    siteTitle: 'EyeTrackVR Docs',
    /* Note the footer will not show when sidebar is active */
    footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright © 2022-present ETVR",
    },
    searchPlaceholder: "Search...",
    nav: [
        {
            text: 'About',
            items: [
                { text: 'About Us', link: '/about' },
                { text: 'Development Road Map', link: '/dev_roadmap' },
            ]
        },
        { text: "Contact", link: "/contact" },
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