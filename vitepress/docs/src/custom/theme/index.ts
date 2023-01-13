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
            text: "Getting Started",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/getting_started/intro" },
                { text: "Things to know before you start", link: "/getting_started/things_to_know" },
            ],
        },
        {
            text: "How to Build",
            collapsible: true,
            items: [
                { text: "Full Build Guide", link: "/how_to_build/full_build_guide" },
                { text: "Part List", link: "/how_to_build/parts_list" },
                { text: "How to Create your own Camera Mount", link: "/how_to_build/creating_your_own_mount" },
            ],
        },
        {
            text: "Firmware Guide",
            collapsible: true,
            items: [
                { text: "Introduction", link: "/firmware_guide/firmware" },
                { text: "Setup Visual Studio Code environment", link: "/firmware_guide/setup_vscode" },
                { text: "Configuring Firmware", link: "/firmware_guide/configure_firmware" },
                { text: "Getting Started", link: "/firmware_guide/upload_firmware" },
            ],
        },
        {
            text: "Software Guide",
            collapsible: true,
            items: [
                { text: "Installing and setting up the ETVR App", link: "/software_guide/eyetrackvr_app_guide" },
                { text: "Building the app from source", link: "/software_guide/build_software" },
            ],
        },
        {
            text: "Miscellaneous",
            collapsible: true,
            items: [
                { text: "VR Chat Avatar Setup", link: "/misc/vrc_avatar_setup" },
                { text: "FAQ", link: "/misc/faq" },
            ],
        },
        {
            text: "Archive",
            collapsible: true,
            items: [
                { text: "Prepare to solder IR LED PCB V2's", link: "/archive/fox_ir_v2_build_instructions" },
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