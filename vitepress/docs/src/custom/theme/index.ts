//https://vitepress.vuejs.org/config/theme-configs
//https://vitepress.vuejs.org/guide/theme-nav#navigation-links

//import MyLayout from '../../vue/MyLayout.vue'
import { type ThemeConfig } from "../../static/types/interfaces"
import { logo } from "../logo"

const theme: ThemeConfig = {

    logo: logo,
    nav: [
        { text: 'Guide', link: '/guide' },
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
            text: 'Guide',
            items: [
                { text: 'Introduction', link: '/introduction' },
                { text: 'Getting Started', link: '/getting-started' },
            ]
        }
    ],
    socialLinks: [
        { icon: 'github', link: 'https://github.com/RedHawk989/EyeTrackVR' },
        { icon: 'discord', link: 'https://discord.gg/kkXYbVykZX' },
        // You can also add custom icons by passing SVG as string:
        {
            icon: {
                svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            },
            link: '...'
        }
    ]
}

const ThemeSettings = {}

export { theme, ThemeConfig, ThemeSettings }